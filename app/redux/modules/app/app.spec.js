import app from './app';

describe('app reducer', () => {
  it('show spinner async page', () => {
    const state = {
      spinnerAsyncPage: false,
    };
    const expectedState = {
      spinnerAsyncPage: true,
    };
    const action = {
      type: 'SHOW_SPINNER_ASYNC_PAGE',
    };

    expect(app(state, action).toJS()).to.eql(expectedState);
  });

  it('hide spinner async page', () => {
    const state = {
      spinnerAsyncPage: true,
    };
    const expectedState = {
      spinnerAsyncPage: false,
    };
    const action = {
      type: 'HIDE_SPINNER_ASYNC_PAGE',
    };

    expect(app(state, action).toJS()).to.eql(expectedState);
  });
});
