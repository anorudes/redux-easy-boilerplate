let initialState = { text: "text" };

export function test(state = initialState, action) {
  let newState = {...state};

  switch (action.type) {

    case 'EXAMPLE':
      newState.text = "change";
      return newState;

    default:
      return newState;
    }
}