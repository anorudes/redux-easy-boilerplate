let initialState = [];

export function items(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {
  case 'ADD':
    newState.push(action.text);
    return newState;
    case 'DELETE':
      newState.pop();
      return newState;
  default:
    return state;
  }
}
