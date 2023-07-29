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
    <section className={styles.container}>
      <div
        // ref={bgRef}
        className={`${styles.bg} ${fixed ? styles.bg_fixed : ''}`}
        style={{
          backgroundImage: `url(${image?.src ?? defaultTexture.src})`,
          // backgroundImage: `url(${bgImage})`,
          opacity: opacity ? String(opacity / 100) : DEFAULT_OPACITY,
          // backgroundAttachment: fixed ? 'fixed' : 'none',
        }}
      ></div>
      <div className={styles.children}>{children}</div>
    </section>
    // <section className={styles.container}>
    //   <div
    //     className={styles.imageWrapper}
    //     style={{
    //       opacity: opacity ? String(opacity / 100) : DEFAULT_OPACITY,
    //       position: fixed ? 'fixed' : 'absolute',
    //     }}
    //   >
    //     <Image
    //       className={styles.image}
    //       src={image ?? defaultTexture}
    //       fill
    //       sizes="1440px"
    //       alt="Задний фон"
    //     />
    //   </div>
    //   <div className={styles.children}>{children}</div>
    // </section>
  );
}

export default memo(Background);
