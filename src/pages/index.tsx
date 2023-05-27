import Layout from '@/components/UI/Layout';
import PromoSlider from '@/components/PromoSlider';
import Advantages from '@/components/Advantages';
import { ADVATAGES } from '@/constants/advantages';
import { PROMO_SLIDES } from '@/constants/promoSlides';
import Products from '@/components/Products';
import { PRODUCTS } from '@/constants/products';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Contacts from '@/components/Contacts';

export default function Home() {
  return (
    <Layout title="Главная">
      <PromoSlider content={PROMO_SLIDES} />

      <Advantages content={ADVATAGES} />

      <Products content={PRODUCTS} />

      <Services />

      <Works />

      <Contacts />
    </Layout>
  );
}
