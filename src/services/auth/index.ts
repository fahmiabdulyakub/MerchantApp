import {
  SendOTPResponseType,
  SendOTPType,
  VerifyOTPResponseType,
  VerifyOTPType,
} from '@services/auth/types';
import {SEND_OTP_PATH, VERIFY_OTP_PATH} from '@services/auth/config';
import {api} from '@utils/ApiUtils';
import {REQUEST_METHOD} from '@constants/api';

export const sendOTP = async (data: SendOTPType) => {
  try {
    return await api<SendOTPResponseType>({
      url: SEND_OTP_PATH,
      data,
      method: REQUEST_METHOD.POST,
    });
  } catch (e) {}
};

export const verifyOTP = async (data: VerifyOTPType) => {
  try {
    return await api<VerifyOTPResponseType>({
      url: VERIFY_OTP_PATH,
      data,
      method: REQUEST_METHOD.POST,
    });
  } catch (e) {}
};
