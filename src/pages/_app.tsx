import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@/styles/globals.scss';
import '@/styles/animations.scss';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily}, 'Arial', sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
