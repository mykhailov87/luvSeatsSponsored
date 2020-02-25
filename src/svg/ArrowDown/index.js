// Core
import React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowDown(props) {
  return (
    <Svg width={14} height={8} viewBox="0 0 14 8" fill="none" {...props}>
      <Path
        d="M1 1l5.897 5L13 1.215"
        stroke="#A9A9A9"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ArrowDown;
