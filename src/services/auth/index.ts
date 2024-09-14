import {
  SendOTPResponseType,
  SendOTPType,
  VerifyOTPResponseType,
  VerifyOTPType,
} from '@services/auth/types';
import {SEND_OTP_PATH, VERIFY_OTP_PATH} from '@services/auth/config';
import {api} from '@utils/ApiUtils';
import {REQUEST_METHOD} from '@constants/api';
import {reject} from 'lodash';

export const sendOTP = (data: SendOTPType) => {
  return new Promise<SendOTPResponseType>(resolve => {
    api({url: SEND_OTP_PATH, data, method: REQUEST_METHOD.POST})
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const verifyOTP = (data: VerifyOTPType) => {
  return new Promise<VerifyOTPResponseType>(resolve => {
    api({url: VERIFY_OTP_PATH, data, method: REQUEST_METHOD.POST})
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
