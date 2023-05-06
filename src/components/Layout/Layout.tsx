import React from 'react';
import Head from 'next/head';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Image from 'next/image';
import styles from './Layout.module.scss';
import Link from 'next/link';
import { A1_NUMBER, MTC_NUMBER } from '@/constants';
import MTCLogo from '@/assets/images/logo-mts.png';
import A1Logo from '@/assets/images/logo-a1.png';

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

      <aside className={styles.numbers}>
        <ul className={`container ${styles.numbers__list}`}>
          <li>
            <Link href={`tel:${A1_NUMBER}`} className={styles.numbers__link}>
              <Image
                className={styles.numbers__icon}
                src={A1Logo}
                width={18}
                height={18}
                alt="A1 Logo"
              />{' '}
              {A1_NUMBER}
            </Link>
          </li>
          <li>
            <Link href={`tel:${MTC_NUMBER}`} className={styles.numbers__link}>
              <Image
                className={styles.numbers__icon}
                src={MTCLogo}
                width={18}
                height={18}
                alt="MTC Logo"
              />{' '}
              {MTC_NUMBER}
            </Link>
          </li>
        </ul>
      </aside>

      <Header />

      <main className="container page">{children}</main>

      <Footer />
    </>
  );
}
