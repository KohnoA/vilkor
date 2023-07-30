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
    <Layout title="Главная">
      <PromoSlider content={PROMO_SLIDES} />

      {/* <Background>
        <Advantages content={ADVATAGES} />

        <TransitionIcon />
      </Background> */}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Advantages content={ADVATAGES} />
        <TransitionIcon />
      </div>

      <div style={{ backgroundColor: '#f9f8f3' }}>
        <Products content={PRODUCTS} />
      </div>

      <Services content={SERVICES} />

      <div style={{ backgroundColor: '#f9f8f3' }}>
        <Works content={WORKS} />
      </div>

      <div
        style={{
          backgroundImage: `url(${contactsBg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Contacts theme={AppTheme.DARK} />
      </div>
      {/* <Background fixed={false} image={contactsBg} opacity={100}> */}
      {/* </Background> */}

      <ScrollToTop />
    </Layout>
  );
}
