import {COLORS} from '@constants/colors';
import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

const ICLogout = ({color, size = 18}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.16634 18.8337C3.94533 18.8337 3.73337 18.7459 3.57709 18.5896C3.42081 18.4333 3.33301 18.2213 3.33301 18.0003V3.00033C3.33301 2.77931 3.42081 2.56735 3.57709 2.41107C3.73337 2.25479 3.94533 2.16699 4.16634 2.16699H15.833C16.054 2.16699 16.266 2.25479 16.4223 2.41107C16.5785 2.56735 16.6663 2.77931 16.6663 3.00033V18.0003C16.6663 18.2213 16.5785 18.4333 16.4223 18.5896C16.266 18.7459 16.054 18.8337 15.833 18.8337H4.16634ZM12.4997 13.8337L16.6663 10.5003L12.4997 7.16699V9.66699H7.49967V11.3337H12.4997V13.8337Z"
        fill={color || COLORS.LIGHT_GREY}
      />
    </Svg>
  );
};

export default memo(ICLogout);
