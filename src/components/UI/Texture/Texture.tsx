import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';
import styles from './Texture.module.scss';
import TextureImage from 'public/images/white-texture.jpg';

interface TextureProps {
  image?: StaticImageData;
}

function Texture({ image }: TextureProps) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={image ?? TextureImage}
        fill
        sizes="1440px"
        alt="Задний фон"
      />
    </div>
  );
}

export default memo(Texture);
