import R from 'ramda';

export const createReducer = (handlers, initialState) =>
  (state = initialState, action = {}) => {
    return R.propIs(Function, action.type, handlers)
        ? handlers[action.type](state, action)
        : state;
  };
