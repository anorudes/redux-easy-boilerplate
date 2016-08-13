// Api middleware
// See in /app/redux/modules/posts.js apiGetPosts

import request from 'superagent-bluebird-promise';
import { API_URL } from '../../constants';

export const apiMiddleware = store => next => action => {
  if (action.url) {
    // Generate promise
    const requestPromise = action.mode === 'GET'
      ? request.get(API_URL + action.url)
        .query({ // add query (if get)
          ...action.data,
        })
      : request.post(API_URL + action.url)
        .send({ // add body (if post)
          ...action.data,
        });

    next({
      type: action.type,
      payload: {
        promise: requestPromise
          .promise()
          .then(res => res)
          .catch(res => {
            const data = res.res;
            if (action.callback) {
              action.callback(data, store.dispatch);
            }
            if (action.onFailure) {
              action.onFailure(data, store.dispatch);
            }
            return data;
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
