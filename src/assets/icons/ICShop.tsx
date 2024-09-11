import {COLORS} from '@constants/colors';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

const ICShop = ({color, size = 24}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z"
        stroke={color || COLORS.LIGHT_GREY}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </Svg>
  );
};

export default ICShop;
