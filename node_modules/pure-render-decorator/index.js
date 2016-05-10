/**
 * @author Félix Girault <felix.girault@gmail.com>
 * @license MIT
 */
'use strict';

var shallowCompare = require('react-addons-shallow-compare');



/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  return shallowCompare(this, nextProps, nextState);
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}



module.exports = pureRenderDecorator;
