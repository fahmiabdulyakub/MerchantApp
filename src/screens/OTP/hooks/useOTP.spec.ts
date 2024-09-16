import {act, renderHook} from '@testing-library/react-hooks';
import {reset} from '@lib/navigation/utils';
import {RouteNames} from '@lib/navigation/routes';
import {verifyOTP} from '@services';
import {useEncryptedToken} from '@hooks';
import useOTP from '@screens/OTP/hooks/useOTP';
import {OTP_LENGTH, RESEND_TIME} from '@screens/OTP/config';
import {MOCK_PHONE_NUMBER, MOCK_SESSION_ID} from '@screens/SignIn/mock';

jest.mock('@lib/navigation/utils', () => ({
  reset: jest.fn(),
}));

jest.mock('@services', () => ({
  verifyOTP: jest.fn(),
}));

jest.mock('@hooks', () => ({
  useEncryptedToken: jest.fn(),
}));

describe('useOTP Hook', () => {
  const mockToken = 'mock_token';
  const mockParams = {
    session_id: MOCK_SESSION_ID,
    phoneNumber: MOCK_PHONE_NUMBER,
  };
  const mockOtp = ['1', '2', '3', '4', '5', '6'];

  beforeEach(() => {
    (useEncryptedToken as jest.Mock).mockReturnValue({
      saveToken: jest.fn(),
    });

    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should initialize with the correct default state', () => {
    const {result} = renderHook(() => useOTP(mockParams));

    expect(result.current.otp).toEqual(Array(OTP_LENGTH).fill(''));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.timeLeft).toBe(RESEND_TIME);
  });

  it('should handle OTP input change and trigger OTP verification on last input', async () => {
    const {result} = renderHook(() => useOTP(mockParams));

    (verifyOTP as jest.Mock).mockResolvedValue({
      data: {token: mockToken},
    });

    await act(async () => {
      for (let i = 0; i < OTP_LENGTH; i++) {
        await result.current.handleOtpChange(mockOtp[i], i);
      }
    });

    expect(result.current.otp).toEqual(mockOtp);
    expect(result.current.isLoading).toBe(false);
    expect(useEncryptedToken().saveToken).toHaveBeenCalledWith(mockToken);
    expect(reset).toHaveBeenCalledWith(RouteNames.MAIN_APP);
  });

  it('should handle OTP verification failure and show an error', async () => {
    const {result} = renderHook(() => useOTP(mockParams));

    (verifyOTP as jest.Mock).mockResolvedValue({
      data: {},
      errors: {message: 'Invalid OTP provided, please try again.'},
    });

    await act(async () => {
      for (let i = 0; i < OTP_LENGTH; i++) {
        await result.current.handleOtpChange(mockOtp[i], i);
      }
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.otp).toEqual(Array(OTP_LENGTH).fill(''));
    expect(result.current.errorMessage).toBe(
      'Invalid OTP provided, please try again.',
    );
  });
  it('should reset timer on OTP resend', () => {
    const {result} = renderHook(() => useOTP(mockParams));

    act(() => {
      jest.advanceTimersByTime(1000);
      result.current.handleResend();
    });

    expect(result.current.timeLeft).toBe(RESEND_TIME);
  });

  it('should decrement timer every second', () => {
    const {result} = renderHook(() => useOTP(mockParams));

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.timeLeft).toBe(RESEND_TIME - 2);
  });

  it('should not go below 0 for the timer', () => {
    const {result} = renderHook(() => useOTP(mockParams));

    act(() => {
      jest.advanceTimersByTime(RESEND_TIME * 1000 + 1000);
    });

    expect(result.current.timeLeft).toBe(0);
  });
});
