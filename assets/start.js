import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path
      d="M8.9 8.8H2.1c-1 0-1.4 1.2-.6 1.8l5.5 4-2.1 6.5c-.3.9.8 1.7 1.5 1.1l5.5-4 5.5 4c.8.6 1.8-.2 1.5-1.1L17 14.6l5.5-4c.8-.6.4-1.8-.6-1.8H15l-2-6.5c-.3-.9-1.6-.9-1.9 0L8.9 8.8z"
      fill="#EBE100"
    />
  </Svg>
);

export default SvgComponent;
