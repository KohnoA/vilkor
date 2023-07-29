import { StaticImageData } from 'next/image';
import styles from './Background.module.scss';
// import defaultTexture from 'public/images/white-texture.jpg';
import defaultTexture from 'public/images/white-texture-optim.jpg';
import { memo } from 'react';

interface BackgroundProps {
  children: React.ReactNode;
  image?: StaticImageData;
  opacity?: number;
  fixed?: boolean;
}

const DEFAULT_OPACITY = '0.6';

function Background({ image, opacity, fixed = true, children }: BackgroundProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${image?.src ?? defaultTexture.src})`,
          opacity: opacity ? String(opacity / 100) : DEFAULT_OPACITY,
          backgroundAttachment: fixed ? 'fixed' : 'none',
        }}
      ></div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default memo(Background);
