import { SVGAttributes } from "react";

// eslint-disable-next-line react/display-name,import/no-anonymous-default-export
export default (props: SVGAttributes<SVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.727 4.545v2.728l3.864-3.637L9.727 0v2.727C5.457 2.727 2 5.982 2 10c0 1.427.444 2.755 1.198 3.873l1.41-1.327A5.09 5.09 0 0 1 3.932 10c0-3.01 2.598-5.455 5.795-5.455zm6.53 1.582-1.41 1.328c.425.763.676 1.627.676 2.545 0 3.01-2.599 5.454-5.796 5.454v-2.727l-3.863 3.637L9.727 20v-2.727c4.27 0 7.727-3.255 7.727-7.273a6.904 6.904 0 0 0-1.197-3.873z"
      fill="#fff"
    />
  </svg>
);
