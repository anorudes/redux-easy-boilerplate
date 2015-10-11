const initialState = {
  items: [],
};

export function items(state = initialState, action) {
  switch (action.type) {
  case 'ADD':
    return {
      ...state,
      items: [
        ...state.items,
        {
          text: action.text,
          numb: state.items.length + 10,
        },
      ],
    };

  case 'DELETE':
    return {
      ...state,
      items: [
        ...state.items.slice(0, state.items.length - 1),
      ],
    };

  default:
    return state;
  }
}
