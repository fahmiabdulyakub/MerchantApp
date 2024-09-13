import {COLORS} from '@constants/colors';
import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

const ICQRCode = ({color, size = 24}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13,11V7h4v4ZM7,13v4h4V13Z"
        strokeWidth={2}
        fill={COLORS.WHITE}
      />
      <Path
        d="M13,11V7h4v4Zm4,6V15H15v2ZM7,13v4h4V13ZM7,7V9H9V7Z"
        stroke={color || COLORS.BLACK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M21,8V4a1,1,0,0,0-1-1H16"
        stroke={color || COLORS.BLACK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M16,21h4a1,1,0,0,0,1-1V16"
        stroke={color || COLORS.BLACK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M8,3H4A1,1,0,0,0,3,4V8"
        stroke={color || COLORS.BLACK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        d="M3,16v4a1,1,0,0,0,1,1H8"
        stroke={color || COLORS.BLACK}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
};

export default memo(ICQRCode);
