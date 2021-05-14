import React from "react";

function Error404(props) {
  return (
    <svg
      {...props}
      width={330.42}
      height={334.415}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="84.79 -92.208 330.42 334.415"
      style={{
        background: "0 0",
        margin: "auto",
        display: "flex",
      }}
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <filter
          id="prefix__editing-jagged"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feTurbulence result="turb" seed={1} />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale={4} />
        </filter>
      </defs>
      <g filter="url(#prefix__editing-jagged)">
        <path
          d="M203.495 142.375h-26.95v-20.94h-39.27v-20.64l24.94-90.86h41.28v89.47h7.08v22.03h-7.08v20.94zm-26.95-109.65l-15.71 66.68h15.71v-66.68zm73.45 110.88q-16.78 0-25.87-9.47-9.08-9.47-9.08-27.03v-59.75q0-18.79 8.77-28.64 8.78-9.86 26.18-9.86 17.56 0 26.34 9.86 8.78 9.85 8.78 28.64v59.75q0 17.71-9.09 27.11-9.09 9.39-26.03 9.39zm0-24.33q2.93 0 4.78-2.69 1.85-2.7 1.85-6.4v-65.29q0-5.7-1.31-8.7-1.31-3.01-5.32-3.01-4 0-5.23 3.01-1.23 3-1.23 8.7v65.29q0 3.7 1.77 6.4 1.77 2.69 4.69 2.69zm105.65 23.1h-26.95v-20.94h-39.27v-20.64l24.95-90.86h41.27v89.47h7.08v22.03h-7.08v20.94zm-26.95-109.65l-15.71 66.68h15.71v-66.68z"
          fill="#444"
        />
      </g>
      <style />
    </svg>
  );
}

export default Error404;
