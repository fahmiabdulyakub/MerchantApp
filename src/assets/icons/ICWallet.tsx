import {COLORS} from '@constants/colors';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

const ICWallet = ({color, size = 24}: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color || COLORS.LIGHT_GREY}>
      <Path
        d="M22,14.5859a2.5038,2.5038,0,0,0-2-2.4494V10.5859a2.5026,2.5026,0,0,0-2.5-2.5h-.793L12.2676,3.6465a2.5027,2.5027,0,0,0-3.5352,0L4.27,8.1093A2.4944,2.4944,0,0,0,2,10.5859v8a2.5026,2.5026,0,0,0,2.5,2.5h13a2.5026,2.5026,0,0,0,2.5-2.5V17.0353A2.5037,2.5037,0,0,0,22,14.5859ZM9.44,4.3535a1.5012,1.5012,0,0,1,2.121,0L15.293,8.0859H5.707ZM17.5,20.0859H4.5a1.5016,1.5016,0,0,1-1.5-1.5v-8a1.5017,1.5017,0,0,1,1.5-1.5h13a1.5017,1.5017,0,0,1,1.5,1.5v1.5H17.5a2.5,2.5,0,0,0,0,5H19v1.5A1.5016,1.5016,0,0,1,17.5,20.0859Zm2-4h-2a1.5,1.5,0,0,1,0-3h2a1.5,1.5,0,1,1,0,3Z"
        fill={color || COLORS.LIGHT_GREY}
      />
    </Svg>
  );
};

export default ICWallet;
