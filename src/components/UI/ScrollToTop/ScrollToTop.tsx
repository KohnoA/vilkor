import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';
import { IconColor } from '@/constants';
import ArrowUpIcon from '@/components/icons/ArrowUpIcon';

const TOP_OF_PAGE = 0;
const BUTTON_DISPLAY_POINT = 600;

export default function ScrollToTop() {
  const [showUpButton, setShowUpButton] = useState<boolean>(false);

  const showUpButtonHandler = () => setShowUpButton(window.scrollY > BUTTON_DISPLAY_POINT);

  const backToTopHandler = () => {
    window.scrollTo({ top: TOP_OF_PAGE });
  };

  useEffect(() => {
    window.addEventListener('scroll', showUpButtonHandler);
  }, []);

  return (
    <button
      className={`${styles.button} ${showUpButton ? styles.button_show : ''}`}
      onClick={backToTopHandler}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon color={IconColor.WHITE} width={15} height={15} />
    </button>
  );
}
