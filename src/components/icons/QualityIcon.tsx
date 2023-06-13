import { IconColor } from '@/constants';
import { IconsProps } from '@/types';
import { FC, memo } from 'react';

const QualityIcon: FC<IconsProps> = ({ width, height, color }) => {
  const INITIAL_WIDTH = 75;
  const INITIAL_HEIGHT = 75;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? INITIAL_WIDTH}
      height={height ?? INITIAL_HEIGHT}
      viewBox="0 0 26 26"
      fill={color ?? IconColor.GREEN}
    >
      <path d="M16.531 5.063c-.285.019-.566.117-.875.28-1.383.735-6.398 3.59-6.406 3.595A1.515 1.515 0 008.719 11a1.508 1.508 0 001.937.594c.07-.035 2.504-1.281 3.625-1.875 1.196-.633 1.938.094 1.938.094s4.316 4.304 5.531 5.468c.79.758 1.871.387 2.219.344.347-.043 2.031-.375 2.031-.375V7.375s-2.578.602-4.094.906c-.465.094-1.031-.219-1.031-.219s-1.258-1.074-2.656-2.25c-.707-.597-1.211-.785-1.688-.75zm-6.75.093c-1.594 0-4.906 2.188-4.906 2.188s-.938.605-2.281.062L0 6.5v9s.742.23 1.406.5c.153-.426.383-.832.719-1.156 1.102-1.051 2.934-1.063 3.938-.031.3.312.515.714.625 1.124.406.126.765.32 1.062.626.305.312.516.683.625 1.093a2.51 2.51 0 011.063.657c.332.343.55.769.656 1.218.422.125.816.34 1.125.657.601.617.816 1.468.687 2.28 0 0 .364.427.594.657.445.445 1.18.445 1.625 0a1.155 1.155 0 000-1.625c-.016-.016-1.648-1.664-1.5-1.813.148-.148 2.215 1.997 2.219 2a1.127 1.127 0 001.625-1.563c-.008-.007-1.867-2.007-1.75-2.124.133-.133 2.37 2.188 2.375 2.188.449.414 1.156.406 1.593-.032.438-.437.418-1.144 0-1.593-.003-.004-1.835-1.977-1.718-2.094.117-.117 2.027 1.777 2.031 1.781a1.118 1.118 0 001.594 0 1.155 1.155 0 000-1.625c-.008-.008-2.492-2.457-5-4.969 0 0-.727-.781-1.719-.344-.695.305-1.605.747-2.281 1.063-.742.39-1.399.5-1.531.5a2.59 2.59 0 01-2.594-2.594c0-.93.484-1.758 1.218-2.219 1.036-.718 3.438-1.968 3.438-1.968s-.75-.938-2.344-.938zM4.125 15.25c-.398.012-.805.16-1.125.469-.64.617-1.074 1.754-.5 2.406.57.652 1.246.238 1.75.125-.14.496-.578.977-.063 1.625.512.652 1.247.238 1.75.125-.14.496-.558 1.02-.062 1.625.496.605 1.336.262 1.875.094-.207.535-.664 1.133-.094 1.781.57.648 1.887.336 2.532-.281.64-.614.69-1.602.124-2.188-.39-.398-.964-.48-1.5-.312.211-.535.153-1.153-.25-1.563-.359-.37-.902-.457-1.406-.343.14-.497.082-1.032-.281-1.407-.36-.367-.902-.457-1.406-.343.14-.497.078-1.032-.282-1.407-.285-.293-.664-.418-1.062-.406z"></path>
    </svg>
  );
};

export default memo(QualityIcon);
