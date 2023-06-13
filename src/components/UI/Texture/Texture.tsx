import styles from './Texture.module.scss';

interface TextureProps {
  children: React.ReactNode;
}

export default function Texture({ children }: TextureProps) {
  return (
    <section className={styles.texture}>
      <div className={styles.texture__bg}></div>

      {children}
    </section>
  );
}
