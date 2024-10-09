import {act, renderHook} from '@testing-library/react-hooks';
import {useIsFocused} from '@react-navigation/native';
import useHome from '@screens/Home/hooks/useHome';
import {getProducts} from '@services';
import {MOCK_PRODUCTS} from '@screens/Home/mock';

jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
}));

jest.mock('@services', () => ({
  getProducts: jest.fn(),
}));

jest.mock('react-native-config', () => ({
  PRODUCT_URL: 'https://api.example.com',
}));

describe('useHome Hook', () => {
  beforeEach(() => {
    (useIsFocused as jest.Mock).mockReturnValue(true);
    (getProducts as jest.Mock).mockResolvedValue({
      data: MOCK_PRODUCTS,
    });
  });

  it('should fetch and set products data when focused', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useHome());

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.data).toEqual([]);

    expect(result.current.isLoading).toBe(false);
  });

  it('should handle the loading state correctly', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useHome());

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.isLoading).toBe(false);
  });
});
