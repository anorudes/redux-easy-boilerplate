let initialState = { text: 'text' };

export function <%= name %>(state = initialState, action) {
  switch (action.type) {
  case 'EXAMPLE':
    return {
      ...state,
      text: "change"
    }

  default:
    return state;
  }
}
