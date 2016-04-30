// Api middleware
// See in app/redux/modules/posts apiGetPosts

import { API_URL } from '../../constants';
import request from 'superagent-bluebird-promise';

export const apiMiddleware = store => next => action => {
  if (action.url) {
    // Generate promise
    const requestPromise = action.mode === 'GET'
      ? request.get(API_URL + action.url)
        .query({
          ...action.data,
        })
      : request.post(API_URL + action.url)
        .send({
          ...action.data,
        });

    next({
      type: action.type,
      payload: {
        promise: requestPromise
          .promise()
          .then(res => res.body)
          .catch(res => {
            const data = res.res;
            store.dispatch({
              type: 'CATCH_ERROR_FROM_SERVER',
              payload: data,
            });
            if (action.callback) {
              action.callback(data, store.dispatch);
            }
            if (action.onFailure) {
              action.onFailure(data, store.dispatch);
            }
          })
          .tap(res => {
            if (action.callback) {
              setTimeout(() => action.callback(res, store.dispatch), 10);
            }
          })
          .tap(res => {
            if (action.onSuccess) {
              action.onSuccess && action.onSuccess(res, store.dispatch);
            }
          }),
        data: { ...action.data },
      },
    });
  } else {
    next(action);
  }
};
