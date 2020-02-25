// Core
import React from 'react';
import Svg, { Defs, Path, G, Mask, Use } from 'react-native-svg';

function HeartCheck(props) {
  return (
    <Svg width={23} height={16} viewBox="0 0 23 16" {...props}>
      <Defs>
        <Path id="prefix__a" d="M0 0h23v16H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          d="M15.31 5.218s1.016-1.036 1.65-1.392a3.865 3.865 0 012.195-.678C21.278 3.148 23 4.843 23 6.932a3.751 3.751 0 01-1.336 2.869L15.311 16 0 .82S.92.26 1.991.26c0 0 1.559 0 2.685 1.12l7.682 7.7-.005.007 2.958 2.957 4.247-4.236a.927.927 0 00-.005-1.315.937.937 0 00-1.321-.005l-2.88 2.867L6.461.561S7.38 0 8.452 0c0 0 1.558 0 2.684 1.12l4.175 4.098z"
          fill="#ED2F24"
          mask="url(#prefix__b)"
        />
      </G>
    </Svg>
  );
}

export default HeartCheck;
