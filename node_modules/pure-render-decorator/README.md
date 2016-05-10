Pure render decorator
=====================

An ES7 decorator to make React components "pure".

Installation
------------

```sh
npm install pure-render-decorator
```

Usage
-----

```jsx
import {Component} from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
class Test extends Component {
  render() {
    return <div></div>;
  }
}
```

The above example is the same as using `PureRenderMixin`:

```jsx
var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var Test = React.createClass({
  mixins: [
    PureRenderMixin
  ],

  render: function() {
    return <div></div>;
  }
});
```
