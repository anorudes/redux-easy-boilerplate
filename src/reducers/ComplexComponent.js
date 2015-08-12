let initialState = 'ComplexComponent Data';

export function ComplexComponent(state = initialState, action) {
  let newState = {...state};

  switch (action.type) {

    case 'EXAMPLE':
      return newState;

    default:
      return newState;
    }
}