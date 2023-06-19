import Image, { StaticImageData } from 'next/image';
import styles from './Background.module.scss';
import defaultTexture from 'public/images/white-texture.jpg';
import { memo } from 'react';

interface BackgroundProps {
  children: React.ReactNode;
  image?: StaticImageData;
  opacity?: number;
  fixed?: boolean;
}

function Background({ image, opacity, fixed = true, children }: BackgroundProps) {
  const DEFAULT_OPACITY = '0.6';

  return (
    <section className={styles.container}>
      <div
        className={styles.imageWrapper}
        style={{
          opacity: opacity ? String(opacity / 100) : DEFAULT_OPACITY,
          position: fixed ? 'fixed' : 'absolute',
        }}
      >
        <Image
          className={styles.image}
          src={image ?? defaultTexture}
          fill
          sizes="100vw"
          alt="Задний фон"
        />
      </div>

      <div className={styles.children}>{children}</div>
    </section>
  );
}

export default memo(Background);
