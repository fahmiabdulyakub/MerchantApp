import {getHeaders} from '@utils/ApiUtils';
import {MMKVLoader} from 'react-native-mmkv-storage';
import {STORAGE_KEYS} from '@constants/storage';

jest.mock('axios');
jest.mock('react-native-mmkv-storage', () => {
  return {
    MMKVLoader: jest.fn().mockImplementation(() => ({
      withEncryption: jest.fn().mockReturnThis(),
      initialize: jest.fn().mockResolvedValue({
        getString: jest.fn(),
      }),
    })),
  };
});

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
});
