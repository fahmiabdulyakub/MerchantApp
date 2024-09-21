import {api, getHeaders} from '@utils/ApiUtils';
import {MMKVLoader} from 'react-native-mmkv-storage';
import {STORAGE_KEYS} from '@constants/storage';
import axios, {AxiosInstance} from 'axios';
import {REQUEST_METHOD} from '@constants/api';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    request: jest.fn(),
  })),
}));

jest.mock('react-native-mmkv-storage', () => ({
  MMKVLoader: jest.fn().mockImplementation(() => ({
    withEncryption: jest.fn().mockReturnThis(),
    initialize: jest.fn().mockResolvedValue({
      getString: jest.fn(),
    }),
  })),
}));

jest.mock('react-native-config', () => ({
  BASE_URL: 'https://api.example.com',
}));

describe('API Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getHeaders', () => {
    it('should return headers without token', async () => {
      const mockMMKV = {
        getString: jest.fn().mockReturnValue(null),
      };
      (MMKVLoader as jest.Mock).mockReturnValue({
        withEncryption: jest.fn().mockReturnThis(),
        initialize: jest.fn().mockReturnValue(mockMMKV),
      });

      const headers = await getHeaders();

      expect(headers).toEqual({
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json',
      });
    });

    it('should return headers with token', async () => {
      const mockToken = 'test-token';
      const mockMMKV = {
        getString: jest.fn().mockReturnValue(mockToken),
      };
      (MMKVLoader as jest.Mock).mockReturnValue({
        withEncryption: jest.fn().mockReturnThis(),
        initialize: jest.fn().mockReturnValue(mockMMKV),
      });

      const headers = await getHeaders();

      expect(headers).toEqual({
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json',
        authorization: `Bearer ${mockToken}`,
      });
      expect(mockMMKV.getString).toHaveBeenCalledWith(STORAGE_KEYS.TOKEN);
    });
  });

  describe('api', () => {
    let mockAxiosInstance: jest.Mocked<AxiosInstance>;

    beforeEach(() => {
      mockAxiosInstance = {
        defaults: {
          headers: {
            common: {},
            delete: {},
            get: {},
            head: {},
            post: {},
            put: {},
            patch: {},
          },
        },
        interceptors: {
          request: {use: jest.fn(), eject: jest.fn(), clear: jest.fn()},
          response: {use: jest.fn(), eject: jest.fn(), clear: jest.fn()},
        },
        request: jest.fn(),
        get: jest.fn(),
        delete: jest.fn(),
        head: jest.fn(),
        options: jest.fn(),
        post: jest.fn(),
        put: jest.fn(),
        patch: jest.fn(),
        postForm: jest.fn(),
        putForm: jest.fn(),
        patchForm: jest.fn(),
        getUri: jest.fn(),
      } as unknown as jest.Mocked<AxiosInstance>;

      (axios.create as jest.Mock).mockReturnValue(mockAxiosInstance);
    });

    it('should make a successful API call', async () => {
      const mockResponse = {
        success: true,
        data: {name: 'Test'},
        message: 'Success',
        errors: {code: '', message: ''},
      };

      mockAxiosInstance.request.mockImplementation(() =>
        Promise.resolve(mockResponse),
      );

      const result = await api({
        method: REQUEST_METHOD.GET,
        url: '/test',
      });

      expect(result).toEqual(mockResponse.data);
      expect(axios.create).toHaveBeenCalledWith({
        baseURL: 'https://api.example.com',
        headers: expect.any(Object),
      });
    });

    it('should handle API errors', async () => {
      const mockError = {
        response: {
          data: {
            error: {
              code: 'ERROR_CODE',
              message: 'Error message',
            },
          },
        },
      };

      mockAxiosInstance.request.mockImplementation(() =>
        Promise.reject(mockError),
      );

      const result = await api({
        method: REQUEST_METHOD.GET,
        url: '/test',
      });

      expect(result).toEqual({
        success: false,
        data: {},
        message: null,
        errors: {
          code: 'ERROR_CODE',
          message: 'Error message',
        },
      });
    });

    it('should handle API errors with mobile_number validation', async () => {
      const mockError = {
        response: {
          data: {
            errors: {
              mobile_number: ['Invalid mobile number'],
            },
          },
        },
      };
      mockAxiosInstance.request.mockImplementation(() =>
        Promise.reject(mockError),
      );

      const result = await api({
        data: {country_dialling_code: '65', mobile_number: '123456'},
        method: REQUEST_METHOD.POST,
        url: '/test',
      });

      expect(result).toEqual({
        data: {},
        success: false,
        message: null,
        errors: {
          code: '',
          message: 'Invalid mobile number',
        },
      });
    });

    it('should use custom headers if provided', async () => {
      const mockResponse = {
        data: {
          success: true,
          message: 'Success',
          errors: {code: '', message: ''},
        },
      };

      mockAxiosInstance.request.mockImplementation(() =>
        Promise.resolve(mockResponse),
      );

      await api({
        method: REQUEST_METHOD.GET,
        url: '/test',
        headers: {'Custom-Header': 'CustomValue'},
      });

      expect(axios.create).toHaveBeenCalledWith(
        expect.objectContaining({
          headers: expect.objectContaining({
            'Custom-Header': 'CustomValue',
          }),
        }),
      );
    });
  });
});
