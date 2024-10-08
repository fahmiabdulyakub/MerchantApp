import {STORAGE_KEYS} from '@constants/storage';
import axios, {AxiosInstance} from 'axios';
import set from 'lodash/set';
import Config from 'react-native-config';
import {MMKVLoader} from 'react-native-mmkv-storage';

export const api = async <T>({
  auth,
  data,
  params,
  method,
  url,
  headers,
}: ApiBuilder) => {
  let result: ApiResponse<T> = {
    success: false,
    data: {} as T,
    message: null,
    errors: {code: '', message: ''},
  };
  const newHeaders = {...(await getHeaders()), ...headers};
  const instance: AxiosInstance = axios.create({
    baseURL: auth ? Config.LOGIN_URL : Config.PRODUCT_URL,
    headers: newHeaders,
  });

  await instance
    .request({url, data, method, params})
    .then(res => {
      result = auth ? res.data : {...result, success: true, data: res.data};
    })
    .catch(err => {
      result = {
        ...result,
        errors: {
          code: err.response.data.error ? err.response.data.error.code : '',
          message: err.response.data.error
            ? err.response.data.error.message
            : err.response.data.errors.mobile_number
            ? err.response.data.errors.mobile_number[0]
            : err.response.data.message,
        },
      };
    });

  return result;
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
