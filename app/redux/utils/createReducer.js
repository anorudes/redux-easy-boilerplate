import R from 'ramda';
import Immutable from 'immutable';

export const createReducer = (handlers, initialState) =>
  (state = initialState, action = {}) => {
    state = Immutable.Iterable.isIterable(state)
      ? state
      : Immutable.fromJS(state);

    return R.propIs(Function, action.type, handlers)
        ? handlers[action.type](state, action)
        : Immutable.fromJS(state);
  };
