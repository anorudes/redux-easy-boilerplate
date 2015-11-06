export function add(text) {
  return {
    type: 'ADD_ITEM',
    text,
  };
}

export function del(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}
