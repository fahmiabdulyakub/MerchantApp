import {RouteNames} from '@lib/navigation/routes';
import {AppParamList} from '@lib/navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TextInputProps} from 'react-native';

export interface IOTP {
  phoneNumber: string;
  session_id: string;
}

export type OTPProps = NativeStackScreenProps<AppParamList, RouteNames.OTP>;

export type IInputOTP = {
  otp: string[];
  onChangeOtp: (value: string, index: number) => void;
  isError?: boolean;
} & TextInputProps;

export interface IResendOTP {
  timeLeft: number;
  onResend: () => void;
}
