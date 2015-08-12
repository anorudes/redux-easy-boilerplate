let initialState = 'app data'

export function complex(state = initialState, action) {
  let newState = {...state};

  switch (action.type) {

    case 'EXAMPLE':
      return newState;

    default:
      return newState;
    }
}