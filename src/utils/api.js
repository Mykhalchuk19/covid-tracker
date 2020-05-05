import { apiUrl } from '../constants';

export const api = (url, params) => fetch(`${apiUrl}/${url}`, {
  ...params,
  headers: {
    Accept: 'application/json',
    ...params.headers,
  },
}).then((data) => data.json());

export default api
