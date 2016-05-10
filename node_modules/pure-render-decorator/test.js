/**
 * @author Félix Girault <felix.girault@gmail.com>
 * @license MIT
 */
'use strict';

var shallowCompare = require('react-addons-shallow-compare');
var assert = require('assert');
var decorate = require('./index');



/**
 *
 */
describe('pure-render-decorator', function() {
  function Component() {};
  decorate(Component);

  var component = new Component();
  component.props = { foo: 1 };
  component.state = { bar: 2 };

  /**
   *
   */
  it('should add a method named shouldComponentUpdate', function() {
    assert.ok('shouldComponentUpdate' in component);
    assert.ok(typeof component.shouldComponentUpdate === 'function');
  });

  /**
   *
   */
  it('should use shallowCompare to compare props and state', function() {
    assert.equal(
      component.shouldComponentUpdate({}, {}),
      shallowCompare(component, {}, {})
    );

    assert.equal(
      component.shouldComponentUpdate(
        component.props,
        component.state
      ),
      shallowCompare(
        component,
        component.props,
        component.state
      )
    );
  });
});
