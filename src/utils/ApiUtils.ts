import {STORAGE_KEYS} from '@constants/storage';
import axios from 'axios';
import set from 'lodash/set';
import Config from 'react-native-config';
import {MMKVLoader} from 'react-native-mmkv-storage';

export const api = async <T>({
  data,
  params,
  method,
  url,
  headers,
}: ApiBuilder) => {
  let result: ApiResponse<T> = {
    success: false,
    data: {} as T,
    message: '',
    errors: '',
  };
  const newHeaders = {...(await getHeaders()), ...headers};
  const instance = axios.create({
    baseURL: Config.BASE_URL,
    headers: newHeaders,
  });

  await instance({url, data, method, params})
    .then(res => {
      result = res.data;
    })
    .catch(err => {
      result = err.response.data;
    });

  return result.data;
};

export const getHeaders = async (): Promise<{[key: string]: string}> => {
  const token = new MMKVLoader()
    .withEncryption()
    .initialize()
    .getString(STORAGE_KEYS.TOKEN);

  const headers: {[key: string]: string} = {
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/json',
  };

  if (token) {
    set(headers, 'authorization', `Bearer ${token}`);
  }

  return headers;
};
