import Image from 'next/image';
import styles from './Texture.module.scss';
import texture from 'public/images/white-texture.jpg';

interface TextureProps {
  children: React.ReactNode;
}

export default function Texture({ children }: TextureProps) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={texture} fill sizes="100vw" alt="Задний фон" />
      </div>

      {children}
    </section>
  );
}
