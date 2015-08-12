let initialState = [];

export function <%= name %>(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {

    case 'EXAMPLE':
      return newState;

    default:
      return state;
  }
}
