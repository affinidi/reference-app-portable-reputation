import { FC, SVGAttributes } from "react";

export const LogoIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="91"
      height="24"
      viewBox="0 0 91 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.377 1.122a12.003 12.003 0 0 1 2.587 3.893 12.055 12.055 0 0 1-2.587 13.078 11.932 11.932 0 0 1-3.873 2.6 11.88 11.88 0 0 1-9.135 0 11.932 11.932 0 0 1-3.873-2.6l4.22-4.243a5.967 5.967 0 0 0 4.22 1.757 5.94 5.94 0 0 0 4.22-1.757 6.003 6.003 0 0 0 1.749-4.243 6.028 6.028 0 0 0-1.748-4.242l4.22-4.243z"
        fill="#6AF6FF"
      />
    </svg>
  );
};
