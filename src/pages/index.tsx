import Layout from '@/components/UI/Layout';
import PromoSlider from '@/components/PromoSlider';
import Advantages from '@/components/Advantages';
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
import ScrollToTop from '@/components/UI/ScrollToTop/ScrollToTop';

const Texture = dynamic(() => import('@/components/UI/Texture/Texture'));

export default function Home() {
  return (
    <Layout title="Главная">
      <PromoSlider content={PROMO_SLIDES} />

      <Texture>
        <Advantages content={ADVATAGES} />

        <TransitionIcon />
      </Texture>

      <Products content={PRODUCTS} />

      <Texture>
        <Services content={SERVICES} />
      </Texture>

      <Works content={WORKS} />

      <Contacts />

      <ScrollToTop />
    </Layout>
  );
}
