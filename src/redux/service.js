import axios from 'axios';
import url from 'url';

import { BASE_API_URL } from 'constants/config';
import { searchParamsFormat } from 'utils';

const api = axios.create({
  baseURL: url.format(BASE_API_URL),
  headers: {
    'Content-Type': 'application/json',
  },
});

async function executeRequest(method, pathname, { searchParams, ...params }) {
  const requestUrl = url.format({
    pathname,
    query: { q: searchParamsFormat(searchParams) },
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
