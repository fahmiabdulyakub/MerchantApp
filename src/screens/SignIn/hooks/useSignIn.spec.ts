import {renderHook, act} from '@testing-library/react-hooks';
import {navigate} from '@lib/navigation/utils';
import {sendOTP} from '@services';
import useSignIn from '@screens/SignIn/hooks/useSignIn';
import {RouteNames} from '@lib/navigation/routes';
import {COLORS} from '@constants/colors';
import {COUNTRY_CODE} from '@screens/SignIn/config';
import {MOCK_PHONE_NUMBER, MOCK_SESSION_ID} from '@screens/SignIn/mock';

jest.mock('@lib/navigation/utils', () => ({
  navigate: jest.fn(),
}));

jest.mock('@services', () => ({
  sendOTP: jest.fn(),
}));

describe('useSignIn Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with the correct default state', () => {
    const {result} = renderHook(() => useSignIn());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isErrorPhoneNumber).toBe(true);
    expect(result.current.phoneNumber).toBe('');
    expect(result.current.borderInputStyle).toBeUndefined();
    expect(result.current.error).toBeUndefined();
  });

  it('should validate phone number and update error state', () => {
    const {result} = renderHook(() => useSignIn());

    act(() => {
      result.current.onChangeText('123');
    });
    expect(result.current.isErrorPhoneNumber).toBe(true);
    expect(result.current.phoneNumber).toBe('123');

    act(() => {
      result.current.onChangeText(MOCK_PHONE_NUMBER);
    });
    expect(result.current.isErrorPhoneNumber).toBe(false);
    expect(result.current.phoneNumber).toBe(MOCK_PHONE_NUMBER);
  });

  it('should return the correct border input style based on phone number validation', () => {
    const {result} = renderHook(() => useSignIn());

    act(() => {
      result.current.onChangeText('123');
    });
    expect(result.current.borderInputStyle).toEqual({
      borderColor: COLORS.RED,
    });

    act(() => {
      result.current.onChangeText(MOCK_PHONE_NUMBER);
    });
    expect(result.current.borderInputStyle).toEqual({
      borderColor: COLORS.GREEN,
    });
  });

  it('should send OTP and navigate to OTP screen on successful request', async () => {
    const {result} = renderHook(() => useSignIn());

    (sendOTP as jest.Mock).mockResolvedValue({
      data: {session_id: MOCK_SESSION_ID},
    });

    act(() => {
      result.current.onChangeText(MOCK_PHONE_NUMBER);
    });

    await act(async () => {
      await result.current.onPressContinue();
    });

    expect(sendOTP).toHaveBeenCalledWith({
      country_dialling_code: COUNTRY_CODE.dial_code.replace('+', ''),
      mobile_number: MOCK_PHONE_NUMBER,
    });
    expect(navigate).toHaveBeenCalledWith(RouteNames.OTP, {
      phoneNumber: COUNTRY_CODE.dial_code + MOCK_PHONE_NUMBER,
      session_id: MOCK_SESSION_ID,
    });
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle OTP request failure and set error state', async () => {
    const {result} = renderHook(() => useSignIn());

    (sendOTP as jest.Mock).mockResolvedValue({
      data: {},
      errors: {message: 'Invalid phone number'},
    });

    act(() => {
      result.current.onChangeText(MOCK_PHONE_NUMBER);
    });

    await act(async () => {
      await result.current.onPressContinue();
    });

    expect(sendOTP).toHaveBeenCalledWith({
      country_dialling_code: COUNTRY_CODE.dial_code.replace('+', ''),
      mobile_number: MOCK_PHONE_NUMBER,
    });
    expect(result.current.error).toEqual({message: 'Invalid phone number'});
    expect(result.current.isErrorPhoneNumber).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });
});
