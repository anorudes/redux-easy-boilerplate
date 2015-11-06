const initialState = {
  items: [{
    text: 'React 0.14',
    done: true,
  }, {
    text: 'Redux 3.0.1',
    done: true,
  }, {
    text: 'React Router 1.0.0-rc3',
    done: true,
  }, {
    text: 'Bootstrap Webpack',
    done: true,
  }, {
    text: 'Sass modules (sass-loader css-loader style-loader)',
    done: true,
  }, {
    text: 'react transform',
    done: true,
  }, {
    text: 'redux-logger',
    done: true,
  }, {
    text: 'react-document-meta@2.0.0-rc2',
    done: true,
  }, {
    text: 'karma',
    done: true,
  }, {
    text: 'mocha',
    done: true,
  }, {
    text: 'Express',
    done: false,
  }, {
    text: 'React server rendering',
    done: false,
  }],
};

export function items(state = initialState, action) {
  switch (action.type) {
  case 'ADD_ITEM':
    return {
      ...state,
      items: [
        ...state.items, {
          text: action.text,
        },
      ],
    };

  case 'DELETE_ITEM':
    return {
      ...state,
      items: [
        // TODO:
        // ...state.items.slice(action.index, state.items.length),
        ...state.items.slice(0, state.items.length - 1),
      ],
    };

  default:
    return state;
  }
}
