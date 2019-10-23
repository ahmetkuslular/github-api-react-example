import axios from 'axios';
import url from 'url';

import { BASE_API_URL } from 'constants/config';
import { queryFormat } from 'utils';

const api = axios.create({
  baseURL: url.format(BASE_API_URL),
  headers: {
    'Content-Type': 'application/json',
  },
});

async function executeRequest(method, pathname, { q, ...params }) {
  const query = {
    ...(q && { q: queryFormat(q) }),
  };

  const requestUrl = url.format({
    pathname,
    query,
  });
  
  const requestObject = {
    method,
    url: decodeURIComponent(requestUrl),
    params,
  };

  return new Promise((resolve, reject) => {
    return api
      .request(requestObject)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        if (error.response) {
          reject(error.response.data);
        }
        reject(error);
      });
  });
}

export default {
  GET(url, params) {
    return executeRequest('get', url, params);
  },
};
