import type { AppProps } from 'next/app';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@/styles/globals.scss';
import '@/styles/animations.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
