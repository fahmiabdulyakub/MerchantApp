import {act, renderHook} from '@testing-library/react-hooks';
import {useIsFocused} from '@react-navigation/native';
import useHome from '@screens/Home/hooks/useHome';
import {getFeaturedMerchant} from '@services';
import {MOCK_MERCHANTS} from '@screens/Home/MOCK';

jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
}));

jest.mock('@services', () => ({
  getFeaturedMerchant: jest.fn(),
}));

describe('useHome Hook', () => {
  beforeEach(() => {
    (useIsFocused as jest.Mock).mockReturnValue(true);
    (getFeaturedMerchant as jest.Mock).mockResolvedValue({
      merchants: MOCK_MERCHANTS,
    });
  });

  it('should fetch and set merchant data when focused', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useHome());

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.data).toEqual(MOCK_MERCHANTS);

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
