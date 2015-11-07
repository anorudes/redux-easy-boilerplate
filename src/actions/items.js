export function addItem(text) {
  return {
    type: 'ADD_ITEM',
    text,
  };
}

export function delItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}
