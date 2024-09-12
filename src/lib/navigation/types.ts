import {RouteNames} from '@lib/navigation/routes';
import {IOTP} from '@screens/OTP/types';

export type AppParamList = {
  [RouteNames.HOME]: undefined;
  [RouteNames.MAIN_APP]: undefined;
  [RouteNames.MANAGE]: undefined;
  [RouteNames.OTP]: IOTP;
  [RouteNames.PROFILE]: undefined;
  [RouteNames.SHOP]: undefined;
  [RouteNames.SIGN_IN]: undefined;
  [RouteNames.SPLASH]: undefined;
};
