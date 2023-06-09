import { IconsProps } from '@/types';
import React from 'react';

function PlusIcon({ color, width, height }: IconsProps) {
  const INITIAL_WIDTH = 25;
  const INITIAL_HEIGHT = 25;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color ?? '#919191'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 12h16m-8-8v16"
      ></path>
    </svg>
  );
}

export default React.memo(PlusIcon);
