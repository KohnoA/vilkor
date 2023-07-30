import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.scss';

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

      <Header />

      <main className="page">
        <div className={styles.texture}></div>
        {children}
      </main>

      <Footer />
    </>
  );
}
