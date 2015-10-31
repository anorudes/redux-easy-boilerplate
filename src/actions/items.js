export function add(text) {
  return {
    type: 'ADD_ITEM',
    text,
  };
}

export function del() {
  return {
    type: 'DELETE_ITEM',
  };
}
