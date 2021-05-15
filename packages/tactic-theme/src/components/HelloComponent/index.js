import React, { useRef } from "react";

import { Svg } from "./styles";
const HelloComponent = () => {
  const helloRef = useRef();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={428}
      height={343}
      viewBox="0 0 428.83 343.87"
      id="hello"
      ref={helloRef}
    >
      <path
        className="prefix__line"
        stroke="#1c1b20"
        strokeWidth={41}
        d="M21.5.01v152m0-78h81.67m0-74v152m65-152v152m0-132.51h77.66m-77.66 56.51h72.66m-72.66 55.49h77.66M21.5 186.68v152m0-20.51h72.67M128.5 186.68v152m0-20.51h72.67"
      />
      <circle
        className="prefix__line"
        cx={283.51}
        cy={262.69}
        r={60.68}
        fill="none"
        stroke="#1c1b20"
        strokeWidth={41}
      />
      <circle
        className="prefix__dot"
        cx={403.17}
        cy={316.01}
        r={25.67}
        data-svg-origin="403.17000007629395 316.00999641418457"
        fill="#ff5851"
      />
    </Svg>
  );
};

export default HelloComponent;
