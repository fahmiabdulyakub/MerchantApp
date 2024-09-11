import {COLORS} from '@constants/colors';
import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

const ICProfile = ({color, size = 24}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.5 17.2786C20.5 18.4419 19.6703 19.5928 18.1159 20.481C16.5756 21.3612 14.4144 21.9215 12 21.9215C9.58561 21.9215 7.42438 21.3612 5.88411 20.481C4.3297 19.5928 3.5 18.4419 3.5 17.2786C3.5 16.1153 4.3297 14.9644 5.88411 14.0762C7.42438 13.196 9.58561 12.6357 12 12.6357C14.4144 12.6357 16.5756 13.196 18.1159 14.0762C19.6703 14.9644 20.5 16.1153 20.5 17.2786Z"
        stroke={color || COLORS.LIGHT_GREY}
      />
      <Circle
        cx="12"
        cy="5.70731"
        r="4.64286"
        stroke={color || COLORS.LIGHT_GREY}
      />
    </Svg>
  );
};

export default ICProfile;
