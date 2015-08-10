import _ from 'underscore';
import Helpers from '../../../Utils/helpers.js';

export default class performanceWidget {

  static performanceWidget(data) {
    var chartData = prepareData(data);

    var colorMap = {
      "Measure1": "red",
      "Measure2": "blue",
      "Target": "orange"
    };

    var selection = d3.select('#Performance');
    var chart = performanceWidget.lineChart().title('Performance').palette(colorMap)(selection.datum(chartData));

    Dashboard.widgets.push({
      type: "LineChart",
      name: "Performance",
      obj: chart,
      selection: selection,
      rawData: data,
      preparedData: chartData,
      title: function(title) {
        this.obj.title(title);
      },
      // data: function( data ) { this.rawData = data; this.preparedData = prepareData( this.rawData ); this.selection.datum( this.preparedData ); },
      filter: function(filterObj) {
        this.preparedData = prepareData(this.rawData);
        this.selection.datum(this.preparedData);
      },
      update: function(transitionDuration) {
        this.obj.update(transitionDuration);
      }
    });

    function prepareData(data, filterObj) {
      var filterObj = filterObj ? filterObj : {};
      var dataFiltered = Helpers.filterData(data, filterObj);

      // Parse Date
      var format = d3.time.format('%Y-%m-%d');
      dataFiltered.forEach(function(d) {
        d.Date = format.parse(d.Date);
        d.Measure1 = parseFloat(d.Measure1);
        d.Measure2 = parseFloat(d.Measure2);
        d.Target = parseFloat(d.Target);
      });

      // Date Filter
      dataFiltered = _.filter(dataFiltered, function(d) {
        return d.Date > format.parse('2015-04-30') - 90 * 86400000;
      });

      var dataGrouped = _.groupBy(dataFiltered, 'Date');
      // console.log( "Data Grouped:", dataGrouped );

      var dataReduced = [];
      for (var key in dataGrouped) {
        dataReduced.push({
          'Date': new Date(key),
          'Measure1': d3.mean(dataGrouped[key], function(d) {
            return Helpers.isNumber(d.Measure1) ? d.Measure1 : 0;
          }),
          'Measure2': d3.mean(dataGrouped[key], function(d) {
            return Helpers.isNumber(d.Measure2) ? d.Measure2 : 0;
          }),
          'Target': d3.mean(dataGrouped[key], function(d) {
            return Helpers.isNumber(d.Target) ? d.Target : 0;
          })
        });
      }
      // console.log( "Data Reduced:", dataReduced );

      var chartData = _.reduce(dataReduced, function(memo, item) {
        var measure1Arr = _.chain(memo[0]).push(Helpers.renameProperty(_.pick(item, ['Date', 'Measure1']), 'Measure1', 'value')).value();
        var measure2Arr = _.chain(memo[1]).push(Helpers.renameProperty(_.pick(item, ['Date', 'Measure2']), 'Measure2', 'value')).value();
        var targetArr = _.chain(memo[2]).push(Helpers.renameProperty(_.pick(item, ['Date', 'Target']), 'Target', 'value')).value();

        return [measure1Arr, measure2Arr, targetArr];
      }, [
        [],
        [],
        []
      ]);
      // console.log( "Chart Data:",  chartData );

      return chartData;
    }
  }

  static lineChart(options) {
    let title = null;
    let colorMap = null;

    function chart(selection) {
      let updates = [];
      selection.each(function(data) {
        let sel = d3.select(this);
        sel.style('opacity', 0)
          .transition()
          .duration(800)
          .style('opacity', 1);

        let selectionWidth = parseInt(sel.style('width'), 10), //selection[0][0].clientWidth,
          selectionHeight = 300; //parseInt(sel.style('height'), 10); //selection[0][0].clientHeight;

        let margin = {
          top: 40,
          right: 40,
          bottom: 40,
          left: 40
        };
        let width = selectionWidth - margin.left - margin.right,
          height = selectionHeight - margin.top - margin.bottom;

        let bisectDate = d3.bisector(function(d) {
          return d.Date;
        }).left;
        let x = d3.time.scale().range([0, width]),
          y = d3.scale.linear().range([height, 0]);

        let yMin = d3.min(data, function(d) {
            return d3.min(d, function(c) {
              return c.value;
            })
          }),
          xMin = d3.min(data, function(d) {
            return d3.min(d, function(c) {
              return c.Date;
            })
          }),
          xMax = d3.max(data, function(d) {
            return d3.max(d, function(c) {
              return c.Date;
            })
          });

        x.domain([xMin, xMax]);
        y.domain([yMin - (100 - yMin) / 4, 100]);

        let chart = sel.append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

        if (title) {
          chart.append('text')
            .attr('class', 'title')
            .style('text-anchor', 'middle')
            .attr('x', (width) / 2)
            .attr('y', -20)
            .text(title);
        }

        let line = d3.svg.line()
          .interpolate('basis')
          .x(function(d) {
            return x(d.Date)
          })
          .y(function(d) {
            return y(d.value)
          });

        let lineZero = d3.svg.line()
          .interpolate('basis')
          .x(function(d, i) {
            return x(d.Date)
          })
          .y(function(d, i) {
            return height
          });

        let colors = d3.scale.ordinal()
          .range(['#ff3d5d', '#ff825a', '#ffd16f', '#ff7218', '#04b3f3', '#6e0215', '#71d362', '#c37ec2', '#555', '#a05d56', '#', '#227', '#256']);

        let color = function(k) {
          return colorMap && k in colorMap ? colorMap[k] : colors(k);
        };

        let makeXAxis = d3.svg.axis().scale(x).orient('bottom').ticks(5),
          makeYAxis = d3.svg.axis().scale(y).tickFormat(function(d) {
            return d + '%';
          }).orient('left').ticks(5);

        function makeYGrid() {
          return d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(10);
        }

        function makeXGrid() {
          return d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .ticks(5);
        }

        let tooltip = d3.select(sel.node().parentNode).append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0);

        tooltip.append('div').attr('id', 'key');
        tooltip.append('div').attr('id', 'sep');
        tooltip.append('div').attr('id', 'date')
        tooltip.append('div').attr('id', 'val');

        let tooltipTail = d3.select(sel.node().parentNode).append('div')
          .attr('class', 'tooltip-tail')
          .style('opacity', 0);

        let xAxis = chart.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .style({
            '-moz-user-select': '-moz-none',
            '-khtml-user-select': 'none',
            '-webkit-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
          })
          .call(makeXAxis);

        let yAxis = chart.append('g')
          .attr('class', 'y axis')
          .style('font-size', '10pt')
          .style({
            '-moz-user-select': '-moz-none',
            '-khtml-user-select': 'none',
            '-webkit-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
          })
          .call(makeYAxis);

        let yGrid = chart.append('g')
          .attr('class', 'y grid')
          .style('stroke', 'lightgrey')
          .style('opacity', 0.7)
          .attr('id', 'ygrid')
          .call(makeYGrid().tickSize(-width, 0, 0).tickFormat(''));

        let xGrid = chart.append('g')
          .attr('class', 'x grid')
          .style('stroke', 'lightgrey')
          .style('opacity', 0.7)
          .attr('id', 'xgrid')
          .call(makeXGrid().tickSize(height, 0, 0).tickFormat(''));

        // xGrid.select('path.domain').remove();

        // Set style for axis
        d3.selectAll('.axis path, .axis line, .axis.tick')
          .style({
            'fill': 'none',
            'stroke': 'black', //'#630002',
            'shape-rendering': 'crispEdges'
          });

        let dataLabels = chart.selectAll('.dataLabels')
          .data(data)
          .enter()
          .append('text')
          .attr({
            x: width + 2,
            y(d) {
              return y(d[d.length - 1].value);
            },
            fill(d) {
              return color(d[0].key);
            }
          })
          .text(function(d) {
            return Helpers.formatValue(d[d.length - 1].value) + '%';
          })
          .style('opacity', 0);

        dataLabels.transition()
          .duration(800)
          .style('opacity', 1);

        let lines = chart.selectAll('.dataLine')
          .data(data)
          .enter()
          .append('path')
          .attr('pointer-events', 'stroke')
          .attr('d', function(d) {
            return lineZero(d)
          })
          .style({
            'fill': 'none',
            'stroke-width': '2px',
            'stroke' (d) {
              return color(d[0].key);
            }
          });

        lines.transition()
          .duration(600)
          .attr('d', function(d) {
            return line(d);
          });

        let linesTransparent = chart.selectAll('.helperLine')
          .data(data)
          .enter()
          .append('path')
          .attr('pointer-events', 'stroke')
          .attr('d', function(d) {
            return lineZero(d)
          })
          .style({
            'fill': 'none',
            'stroke-width': '10px',
            'stroke': '#fff0'
          });

        linesTransparent.transition()
          .duration(600)
          .attr('d', function(d) {
            return line(d);
          });

        linesTransparent.on('mousemove', function(d) {
            let mouseX = d3.mouse(this)[0],
              mouseY = d3.mouse(this)[1];

            let x0 = x.invert(mouseX),
              i = bisectDate(d, x0, 0),
              d0 = (i === 0) ? d[i] : d[i - 1],
              d1 = (i === d.length) ? d[i - 1] : d[i],
              c = (x0 - d0.Date) / (d1.Date - d0.Date);

            let val = d0.value + (d1.value - d0.value) * c;
            let eventX = d3.event.clientX; //left +  margin.left + d3.mouse( this )[0]; //d3.event.pageX
            let eventY = d3.event.clientY; //top + margin.top + d3.mouse( this )[1]; //d3.event.pageY

            tooltipTail
              .style('left', (eventX - 7 - 2) + 'px')
              .style('top', (eventY - 10) + 'px');

            tooltipTail.transition()
              .duration(200)
              .style('opacity', .9);

            let shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let month = shortMonths[x0.getMonth()];
            tooltip.select('#key').html(d[0].key);
            tooltip.select('#sep').style('background', color(d[0].key));
            tooltip.select('#date').html(x0.getDate() + ' ' + month + ' ' + x0.getFullYear());
            tooltip.select('#val').html(Helpers.formatValue(val) + '%');

            let w = parseInt(d3.select('.tooltip').style('width'), 10);
            tooltip.style('left', (eventX - w / 2 - 2) + 'px')
              .style('top', (eventY - 70 - 10) + 'px');

            tooltip.transition()
              .duration(200)
              .style('opacity', .9);
          })
          .on('mouseleave', function(d) {
            tooltipTail.transition()
              .duration(200)
              .style('opacity', 0);

            tooltip
              .transition()
              .duration(200)
              .style('opacity', 0);
          });



        function update(transitionDuration) {
          selectionWidth = parseInt(sel.style('width'), 10);
          selectionHeight = parseInt(sel.style('height'), 10);
          width = selectionWidth - margin.left - margin.right;
          height = selectionHeight - margin.top - margin.bottom;

          d3.select(chart.node().parentNode)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);
          chart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

          yMin = d3.min(data, function(d) {
              return d3.min(d, function(c) {
                return c.value;
              })
            }),
            xMin = d3.min(data, function(d) {
              return d3.min(d, function(c) {
                return c.Date;
              })
            }),
            xMax = d3.max(data, function(d) {
              return d3.max(d, function(c) {
                return c.Date;
              })
            });
          x.range([0, width]);
          y.range([height, 0]);
          x.domain([xMin, xMax]);
          y.domain([yMin - (100 - yMin) / 4, 100]);

          if (title) {
            chart.select('text.title')
              .attr('x', (width) / 2)
              .attr('y', -20)
              .text(title);
          }

          if (transitionDuration) {
            xAxis.transition()
              .duration(transitionDuration)
              .call(makeXAxis);

            yAxis.transition()
              .duration(transitionDuration)
              .call(makeYAxis);

            xGrid.transition()
              .duration(transitionDuration)
              .call(makeXGrid().tickSize(height, 0, 0).tickFormat(''));

            yGrid.transition()
              .duration(transitionDuration)
              .call(makeYGrid().tickSize(-width, 0, 0).tickFormat(''));

            lines.transition()
              .duration(transitionDuration)
              .attr('d', function(d) {
                return line(d);
              });

            linesTransparent.transition()
              .duration(transitionDuration)
              .attr('d', function(d) {
                return line(d);
              });

            dataLabels.transition()
              .duration(transitionDuration)
              .attr({
                x: width + 2,
                y(d) {
                  return y(d[d.length - 1].value);
                }
              })
              .text(function(d) {
                return Helpers.formatValue(d[d.length - 1].value) + '%';
              });
          } else {
            xAxis.call(makeXAxis);
            yAxis.call(makeYAxis);
            xGrid.call(makeXGrid().tickSize(height, 0, 0).tickFormat(''));
            yGrid.call(makeYGrid().tickSize(-width, 0, 0).tickFormat(''));
            lines.attr('d', function(d) {
              return line(d);
            });
            linesTransparent.attr('d', function(d) {
              return line(d);
            });
            dataLabels.attr({
                x: width + 2,
                y(d) {
                  return y(d[d.length - 1].value);
                }
              })
              .text(function(d) {
                return Helpers.formatValue(d[d.length - 1].value) + '%';
              });
          }
        }

        updates.push(update);
      });
      return {
        update(transitionDuration) {
            updates.forEach(function(up) {
              up(transitionDuration);
            });
            return this;
          },
          title(newTitle) {
            title = newTitle;
            return this;
          }
      };

    }

    chart.title = function(_) {
      if (!arguments.length) return title;
      title = _;
      return chart;
    };

    chart.palette = function(_) {
      if (!arguments.length) return colorMap;
      colorMap = _;
      return chart;
    };


    return chart;
  }
}