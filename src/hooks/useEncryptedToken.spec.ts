import {renderHook, act} from '@testing-library/react-hooks';
import useEncryptedToken from '@hooks/useEncryptedToken'; // adjust the import path as needed
import {STORAGE_KEYS} from '@constants/storage';
import {useMMKVStorage} from 'react-native-mmkv-storage';

jest.mock('react-native-mmkv-storage', () => ({
  MMKVLoader: jest.fn().mockImplementation(() => ({
    withEncryption: jest.fn().mockReturnThis(),
    initialize: jest.fn().mockReturnValue({
      getString: jest.fn(),
      setString: jest.fn(),
      removeItem: jest.fn(),
    }),
  })),
  useMMKVStorage: jest.fn(),
}));

describe('useEncryptedToken', () => {
  let mockSetToken: jest.Mock;
  let mockUseMMKVStorage: jest.MockedFunction<typeof useMMKVStorage>;

  beforeEach(() => {
    mockSetToken = jest.fn();
    mockUseMMKVStorage = (
      require('react-native-mmkv-storage') as jest.Mocked<
        typeof import('react-native-mmkv-storage')
      >
    ).useMMKVStorage;
    mockUseMMKVStorage.mockReturnValue([null, mockSetToken]);
  });

  it('should initialize with null token', () => {
    const {result} = renderHook(() => useEncryptedToken());

    expect(result.current.token).toBeNull();
    expect(typeof result.current.saveToken).toBe('function');
    expect(typeof result.current.removeToken).toBe('function');
  });

  it('should save token', () => {
    const {result} = renderHook(() => useEncryptedToken());

    act(() => {
      result.current.saveToken('test-token');
    });

    expect(mockSetToken).toHaveBeenCalledWith('test-token');
  });

  it('should remove token', () => {
    const {result} = renderHook(() => useEncryptedToken());

    act(() => {
      result.current.removeToken();
    });

    expect(mockSetToken).toHaveBeenCalledWith(null);
  });

  it('should use correct storage key', () => {
    renderHook(() => useEncryptedToken());

    expect(mockUseMMKVStorage).toHaveBeenCalledWith(
      STORAGE_KEYS.TOKEN,
      expect.anything(),
      null,
    );
  });

  it('should return memoized values', () => {
    const {result, rerender} = renderHook(() => useEncryptedToken());

    const initialToken = result.current.token;
    const initialSaveToken = result.current.saveToken;
    const initialRemoveToken = result.current.removeToken;

    rerender();

    expect(result.current.token).toBe(initialToken);
    expect(result.current.saveToken).toBe(initialSaveToken);
    expect(result.current.removeToken).toBe(initialRemoveToken);
  });
});
