import R from 'ramda';

export default function createReducer(handlers, initialState) {
  return function (state = initialState, action = {}) {
    return R.propIs(Function, action.type, handlers)
      ? handlers[action.type](state, action)
      : state;
  };
}
