import * as React from "react";
import Svg, { Polygon, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const DeleteIcon = () => {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 25 25"
      aria-labelledby="deleteIconTitle"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="#000000"
    >
      <Polygon points="20 18 9 18 3 12 9 6 20 6" />
      <Path d="M12.1143819 10.1143819L15.8856181 13.8856181M12.1143819 13.8856181L15.8856181 10.1143819" />
    </Svg>
  );
};
