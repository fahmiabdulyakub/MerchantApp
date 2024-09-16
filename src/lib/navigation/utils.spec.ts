import {RouteNames} from '@lib/navigation/routes';
import {
  navigate,
  navigateBack,
  navigationRef,
  reset,
} from '@lib/navigation/utils';
import {MOCK_PHONE_NUMBER, MOCK_SESSION_ID} from '@screens/SignIn/mock';

// Mock the navigation ref
jest.mock('@react-navigation/native', () => ({
  createNavigationContainerRef: jest.fn(() => ({
    isReady: jest.fn(),
    navigate: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
  })),
}));

describe('Navigation Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('navigate', () => {
    it('should call navigate when navigation is ready', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(true);
      navigate(RouteNames.HOME);
      expect(navigationRef.isReady).toHaveBeenCalled();
      expect(navigationRef.navigate).toHaveBeenCalledWith(
        RouteNames.HOME,
        undefined,
      );
    });

    it('should not call navigate when navigation is not ready', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(false);
      navigate(RouteNames.HOME);
      expect(navigationRef.isReady).toHaveBeenCalled();
      expect(navigationRef.navigate).not.toHaveBeenCalled();
    });

    it('should call navigate with params when provided', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(true);
      const params = {
        phoneNumber: MOCK_PHONE_NUMBER,
        session_id: MOCK_SESSION_ID,
      };
      navigate(RouteNames.OTP, params);
      expect(navigationRef.navigate).toHaveBeenCalledWith(
        RouteNames.OTP,
        params,
      );
    });
  });

  describe('navigateBack', () => {
    it('should call goBack when navigation is ready', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(true);
      navigateBack();
      expect(navigationRef.isReady).toHaveBeenCalled();
      expect(navigationRef.goBack).toHaveBeenCalled();
    });

    it('should not call goBack when navigation is not ready', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(false);
      navigateBack();
      expect(navigationRef.isReady).toHaveBeenCalled();
      expect(navigationRef.goBack).not.toHaveBeenCalled();
    });
  });

  describe('reset', () => {
    it('should call reset when navigation is ready', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(true);
      reset(RouteNames.HOME);
      expect(navigationRef.isReady).toHaveBeenCalled();
      expect(navigationRef.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{name: RouteNames.HOME, params: undefined}],
      });
    });

    it('should not call reset when navigation is not ready', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(false);
      reset(RouteNames.HOME);
      expect(navigationRef.isReady).toHaveBeenCalled();
      expect(navigationRef.reset).not.toHaveBeenCalled();
    });

    it('should call reset with params when provided', () => {
      navigationRef.isReady = jest.fn().mockReturnValue(true);
      const params = {
        phoneNumber: MOCK_PHONE_NUMBER,
        session_id: MOCK_SESSION_ID,
      };
      reset(RouteNames.OTP, params);
      expect(navigationRef.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{name: RouteNames.OTP, params}],
      });
    });
  });
});
