import Layout from '@/components/UI/Layout';
import PromoSlider from '@/components/PromoSlider/PromoSlider';
import Advantages from '@/components/Advantages/Advantages';
import { ADVATAGES } from '@/constants/advantages';
import { PROMO_SLIDES } from '@/constants/promoSlides';
import Products from '@/components/Products';
import { PRODUCTS } from '@/constants/products';
import Services from '@/components/Services/Services';
import Works from '@/components/Works/Works';
import Contacts from '@/components/Contacts/Contacts';
import TransitionIcon from '@/components/icons/TransitionIcon';
import { SERVICES } from '@/constants/services';
import { WORKS } from '@/constants/works';
import dynamic from 'next/dynamic';
import contactsBg from 'public/images/background.jpg';
import { AppTheme } from '@/constants';

const Background = dynamic(() => import('@/components/UI/Background/Background'));
const ScrollToTop = dynamic(() => import('@/components/UI/ScrollToTop/ScrollToTop'), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout title="VILKOR | Главная">
      <PromoSlider content={PROMO_SLIDES} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Advantages content={ADVATAGES} />
        <TransitionIcon />
      </div>

      <Background>
        <Products content={PRODUCTS} />
      </Background>

      <Services content={SERVICES} />

      <Background>
        <Works content={WORKS} />
      </Background>

      <Background image={contactsBg}>
        <Contacts theme={AppTheme.DARK} />
      </Background>

      <ScrollToTop />
    </Layout>
  );
}
