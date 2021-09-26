import { localStorageKey } from './constants';

export const getHeaders = () => localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : null
export const setHeaders = (data) => {
  const { uid, client, expiry } = data;
  const body = {
    authorization: data['access-token'],
    tokenType: data['token-type'],
    uid,
    client,
    expiry
  }
  localStorage.setItem(localStorageKey, JSON.stringify(body))
}
export const clearHeaders = () => localStorage.removeItem(localStorageKey)