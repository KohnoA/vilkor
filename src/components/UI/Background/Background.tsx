import Image, { StaticImageData } from 'next/image';
import styles from './Background.module.scss';
import { memo } from 'react';
import { IconColor } from '@/constants';

interface BackgroundProps {
  children: React.ReactNode;
  color?: IconColor;
  image?: StaticImageData;
  className?: string;
}

function Background({ image, children, color, className }: BackgroundProps) {
  return (
    <div
      className={`single-section-page ${styles.container} ${className ?? ''}`}
      style={{ backgroundColor: color ?? IconColor.WHITE }}
    >
      {image && <Image className={styles.image} src={image} fill sizes="1440px" alt="Задний фон" />}
      {children}
    </div>
  );
}

export default memo(Background);
