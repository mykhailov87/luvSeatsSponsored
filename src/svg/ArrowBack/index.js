// Core
import React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowBack(props) {
  return (
    <Svg width={12} height={21} viewBox="0 0 12 21" {...props}>
      <Path
        d="M10 2l-8 8.353L9.656 19"
        fillRule="nonzero"
        stroke="#FFF"
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ArrowBack;
