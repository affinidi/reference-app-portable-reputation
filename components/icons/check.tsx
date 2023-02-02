import { SVGAttributes } from 'react'

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
    <g clipPath="url(#ox3bi32fva)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        fill="#C1C4CC"
      />
      <mask
        id="f2jhvcejjb"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          fill="#fff"
        />
      </mask>
    </g>
    <defs>
      <clipPath id="ox3bi32fva">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
