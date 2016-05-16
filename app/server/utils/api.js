import request from 'superagent-bluebird-promise';

// Fetch data from api server
export const apiFetch = (action, host, cookies = {}) => {
  const apiUrl = `http://${host}:3030/api/`;

  let promise = request.get(apiUrl + action.url)
    .query({
      ...action.data,
    });

  // set cookies
  if (cookies) {
    let stringifyCookies = '';
    try {
      stringifyCookies = JSON.stringify({
        ...cookies,
      });
    } catch (e) { }

    promise = promise.set('cookie', stringifyCookies);
  }

  return promise
    .promise()
    .then(res => res.body);
};
