import {AppParamList} from '@lib/navigation/types';
import {createNavigationContainerRef} from '@react-navigation/native';
import {RouteNames} from '@lib/navigation/routes';

export const navigationRef = createNavigationContainerRef<AppParamList>();

export const navigate = (
  name: RouteNames,
  params?: AppParamList[RouteNames],
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const navigateBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export function reset(name: RouteNames, params?: AppParamList[RouteNames]) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    });
  }
}
