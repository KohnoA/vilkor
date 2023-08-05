import Head from 'next/head';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Texture from '@/components/UI/Texture/Texture';

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

      <Texture />

      <Header />

      <main className="page">{children}</main>

      <Footer />
    </>
  );
}
