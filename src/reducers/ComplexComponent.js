let initialState = { text: 'text' };

export function ComplexComponent(state = initialState, action) {
  let newState = {...state};

  switch (action.type) {

    case 'EXAMPLE':
      newState.text = "change";
      return newState;

    default:
      return newState;
    }
}