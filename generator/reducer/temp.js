let initialState = { text: 'text' };

export function <%= name %>(state = initialState, action) {
  let newState = {...state};
  
  switch (action.type) {
  case 'EXAMPLE':
    newState.text = "change";
    return newState;

  default:
    return newState;
  }
}
