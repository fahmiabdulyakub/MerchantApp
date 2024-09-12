import React, {memo} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {navigateBack} from '@lib/navigation/utils';
import {ICArrowLeft} from '@assets/icons';

const BackButton = (props: TouchableOpacityProps) => {
  const {onPress, ...baseProps} = props;

  return (
    <TouchableOpacity onPress={onPress ?? navigateBack} {...baseProps}>
      <ICArrowLeft />
    </TouchableOpacity>
  );
};

export default memo(BackButton);
