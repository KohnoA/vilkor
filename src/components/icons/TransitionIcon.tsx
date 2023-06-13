import { IconColor } from '@/constants';
import { IconsProps } from '@/types';
import { memo } from 'react';

function TransitionIcon({ width, height, color }: IconsProps) {
  const INITIAL_WIDTH = '100%';
  const INITIAL_HEIGHT = '15vh';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color ?? IconColor.WHITE}
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      className="t796__svg"
      preserveAspectRatio="none"
      viewBox="0 0 1280 200"
    >
      <path d="M640 195.5L0 0v200h1280V0"></path>
    </svg>
  );
}

export default memo(TransitionIcon);
