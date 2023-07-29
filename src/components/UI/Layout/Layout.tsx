import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

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
        <meta name="theme-color" content="#161b22" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="page">{children}</main>

      <Footer />
    </>
  );
}
