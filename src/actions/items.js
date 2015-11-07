export function addItem(text) {
  return {
    type: 'ADD_ITEM',
    text,
  };
}

export function delItem() {
  return {
    type: 'DELETE_ITEM',
  };
}
