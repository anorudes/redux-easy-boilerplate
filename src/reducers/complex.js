let initialState = [];

export function complex(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {

    case 'GETDATA':
      return newState;

    default:
      return state;
  }
}
