// Core
import React from 'react';
import Svg, { Path } from 'react-native-svg';

function Close(props) {
  return (
    <Svg width={13} height={13} viewBox="0 0 13 13" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 5.318L1.182 0 0 1.182 5.318 6.5 0 11.818 1.182 13 6.5 7.682 11.818 13 13 11.818 7.682 6.5 13 1.182 11.818 0 6.5 5.318z"
        fill="#999"
      />
    </Svg>
  );
}

export default Close;
