import React from 'react';

export default function Svg({ children, className, ...props }: any) {
  return (
    <svg
      className={className}
      height="1em"
      width="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}
