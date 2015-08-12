let complexData = 'app data'

export function complex(state = complexData, action) {
  let newState = {...state};

  switch (action.type) {

    case 'EXAMPLE':
      return newState;

    default:
      return newState;
    }
}