import Image from 'next/image';
import React from 'react';
import background from '@/assets/images/white-texture.jpg';
import styles from './Texture.module.scss';

interface TextureProps {
  children: React.ReactNode;
}

export default function Texture({ children }: TextureProps) {
  return (
    <section className={styles.texture}>
      <div className={styles.texture__bg}>
        <Image src={background} alt="White texture" fill={true} priority={false} />
      </div>

      {children}
    </section>
  );
}
