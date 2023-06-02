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
import Texture from '@/components/UI/Texture';
import TransitionIcon from '@/components/icons/TransitionIcon';

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
        <Services />
      </Texture>

      <Works />

      <Contacts />
    </Layout>
  );
}
