import {COLORS} from '@constants/colors';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

const ICArrowRight = ({color, size = 14}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 330 330" fill="none">
      <Path
        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
        c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
        C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
        C255,161.018,253.42,157.202,250.606,154.389z"
        fill={color || COLORS.NEUTRAL}
      />
    </Svg>
  );
};

export default ICArrowRight;
