import axios from '../jwtInterceptor';

export const post = (url, data) => {
  return axios.post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
