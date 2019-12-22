import axios from 'axios';

export default async ({ url, data, method }) => {
  const result = await axios({
    url,
    method: method || 'GET',
    data,
    headers: {
      'Content-type': 'application/json',
    },
  });
  return result.data;
};
