import React from "react";

const Logo = ({ width, height, fill }) => {
  // 40x40 #0085FF
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 116.000000 116.000000"
      preserveAspectRatio="xMidYMid meet"
      className=""
    >
      <g
        transform="translate(0.000000,116.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M378 953 l-218 -126 0 -262 0 -263 221 -127 c124 -71 227 -124 235
-121 8 3 109 60 224 127 l210 121 0 100 c0 76 -3 99 -12 95 -7 -3 -107 -59
-223 -125 l-209 -121 -63 35 c-34 19 -95 54 -135 78 l-73 43 -3 156 -3 156 93
54 c51 30 113 66 138 80 l45 26 93 -53 93 -53 -136 -77 -136 -78 3 -54 c3 -52
5 -56 43 -78 l40 -24 220 127 220 127 3 55 3 56 -220 126 c-121 70 -224 127
-228 126 -4 0 -106 -57 -225 -126z"
        />
      </g>
    </svg>
  );
};

export default Logo;
