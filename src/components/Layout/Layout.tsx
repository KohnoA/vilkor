import Head from 'next/head';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Texture from '@/components/UI/Texture/Texture';
import { DESCRIPTION, AUTHOR, COPYRIGHT, KEYWORDS, ROBOTS } from '@/constants/meta';

const DEFAULT_TITLE = 'Vilkor';

interface MainContainerProps {
  children?: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: MainContainerProps) {
  return (
    <>
      <Head>
        <title>{title ?? DEFAULT_TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="robots" content={ROBOTS} />
        <meta name="author" content={AUTHOR} />
        <meta name="copyright" content={COPYRIGHT} />
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
