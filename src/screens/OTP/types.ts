import {RouteNames} from '@lib/navigation/routes';
import {AppParamList} from '@lib/navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface IOTP {
  phoneNumber: string;
  session_id: string;
}

export type OTPProps = NativeStackScreenProps<AppParamList, RouteNames.OTP>;

export interface IInputOTP {
  otp: string[];
  onChange: (value: string, index: number) => void;
}

export interface IResendOTP {
  timeLeft: number;
  onResend: () => void;
}
