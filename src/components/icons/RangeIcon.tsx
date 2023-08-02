import { IconColor } from '@/constants';
import { IconsProps } from '@/types';
import { FC, memo } from 'react';

const RangeIcon: FC<IconsProps> = ({ width, height, color }) => {
  const INITIAL_WIDTH = 75;
  const INITIAL_HEIGHT = 75;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      viewBox="-2 -4 52 52"
      fill={color ?? IconColor.GREEN}
    >
      <g data-name="Layer 2">
        <path fill="none" d="M0 0H48V48H0z" data-name="invisible box"></path>
        <path
          d="M44.3 10A3.3 3.3 0 0042 9H11.5l-.4-3.4a3 3 0 00-3-2.6H5a2 2 0 000 4h2.2l3.2 26.9A5.9 5.9 0 007.5 39a6 6 0 006 6 6.2 6.2 0 005.7-4h10.6a6.2 6.2 0 005.7 4 6 6 0 000-12 6.2 6.2 0 00-5.7 4H19.2a6 6 0 00-4.9-3.9l-.2-2.1h25.3a3 3 0 002.9-2.6L45 12.6a3.6 3.6 0 00-.7-2.6zm-6.8 29a2 2 0 11-2-2 2 2 0 012 2zm-22 0a2 2 0 11-2-2 2 2 0 012 2z"
          data-name="icons Q2"
        ></path>
      </g>
    </svg>
  );
};

export default memo(RangeIcon);
