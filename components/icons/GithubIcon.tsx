import { FC, SVGAttributes } from "react";

export const GithubIcon: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.32 0C8.19 0 0 8.25 0 18.456c0 8.159 5.247 15.065 12.527 17.51.91.183 1.243-.398 1.243-.887 0-.428-.03-1.894-.03-3.422-5.096 1.1-6.157-2.2-6.157-2.2-.82-2.14-2.033-2.69-2.033-2.69-1.668-1.13.122-1.13.122-1.13 1.85.122 2.821 1.895 2.821 1.895 1.638 2.81 4.277 2.017 5.338 1.527.152-1.191.637-2.016 1.153-2.475-4.065-.427-8.341-2.016-8.341-9.106 0-2.016.727-3.666 1.88-4.95-.182-.458-.819-2.353.182-4.889 0 0 1.547-.489 5.035 1.895a17.614 17.614 0 0 1 4.58-.612c1.547 0 3.124.214 4.58.612 3.488-2.384 5.035-1.895 5.035-1.895 1.002 2.536.364 4.431.182 4.89 1.183 1.283 1.88 2.933 1.88 4.95 0 7.089-4.276 8.647-8.37 9.105.667.581 1.243 1.68 1.243 3.423 0 2.475-.03 4.461-.03 5.072 0 .489.334 1.07 1.243.886 7.28-2.445 12.527-9.35 12.527-17.509C36.64 8.25 28.42 0 18.32 0z"
        fill="#fff"
      />
    </svg>
  );
};
