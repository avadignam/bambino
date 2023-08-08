import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const HomeIcon = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    x="0px"
    y="0px"
    width="24px"
    height="24px"
    viewBox="796 796 200 200"
    fill='white'
    {...props}
  >
    <G>
      <Path d="M986.054,873.01l-81.253-73.615c-4.995-4.527-12.607-4.527-17.603,0l-81.252,73.615c-4.179,3.787-6.563,9.162-6.563,14.801 v101.546c0,3.669,2.974,6.643,6.642,6.643h60.928v-80.151c0-5.64,4.572-10.212,10.214-10.212h37.665 c5.643,0,10.215,4.572,10.215,10.212V996h60.928c3.668,0,6.642-2.974,6.642-6.643V887.812 C992.616,882.172,990.232,876.797,986.054,873.01z" />
    </G>
  </Svg>
);

export default HomeIcon;
