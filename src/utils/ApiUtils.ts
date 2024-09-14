import axios, {AxiosError} from 'axios';
import set from 'lodash/set';
import Config from 'react-native-config';

export const api = async ({data, method, url}: ApiBuilder) => {
  const headers = await buildFetchHeaders();
  try {
    const response = await axios({
      url: Config.BASE_URL + url,
      headers,
      data,
      method,
    });

    return response.data;
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export const buildFetchHeaders = async (): Promise<{[key: string]: string}> => {
  const token = undefined;

  const headers: {[key: string]: string} = {
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/json',
  };

  if (token) {
    set(headers, 'authorization', `Bearer ${token}`);
  }

  return headers;
};
