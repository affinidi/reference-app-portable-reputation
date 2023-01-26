import { SVGAttributes } from "react";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default (props: SVGAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#dxcp4a730a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 4.014 19.986 2 12 9.986 4.014 2 2 4.014 9.986 12 2 19.986 4.014 22 12 14.014 19.986 22 22 19.986 14.014 12 22 4.014z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="dxcp4a730a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
