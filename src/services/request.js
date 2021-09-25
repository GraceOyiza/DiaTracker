import axios from 'axios';
import { baseApi } from './constants';
import { getHeaders } from './common';

const instance = axios.create({
  baseURL: baseApi,
});

instance.interceptors.request.use(
  config => {
    const header = getHeaders();
    if (header) {
      const {
        authorization, uid, client, tokenType,
      } = header;
      config.headers['access-token'] = authorization;
      config.headers.uid = uid;
      config.headers.client = client;
      config.headers['token-type'] = tokenType;
    }
    return config;
  },
  error => Promise.reject(error),
);

export const signup = async (formData) => {
  try {
    
  } catch (error) {
    
  }
}