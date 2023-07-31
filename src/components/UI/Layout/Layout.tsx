import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import Image from 'next/image';
import Texture from 'public/images/white-texture.jpg';

interface MainContainerProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: MainContainerProps) {
  return (
    <>
      <Head>
        <title>{title ?? 'Vilkor'}</title>
        <meta name="description" content={description ?? 'Vilkor'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.texture}>
        <div className={styles.texture__wrapper}>
          <Image
            className={styles.texture__image}
            src={Texture}
            fill
            sizes="1440px"
            alt="Задний фон"
          />
        </div>
      </div>

      <Header />

      <main className="page">{children}</main>

      <Footer />
    </>
  );
}
