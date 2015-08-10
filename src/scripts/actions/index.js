/*
 * action types
 */

export function add(text) {
  return {
    type: 'ADD',
    text
  };
}

export function del() {
  return {
    type: 'DELETE'
  };
}
