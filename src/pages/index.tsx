import Layout from '@/components/UI/Layout';
import PromoSlider from '@/components/PromoSlider';
import Advantages from '@/components/Advantages';
import { ADVATAGES } from '@/constants/advantages';
import { PROMO_SLIDES } from '@/constants/promoSlides';
import Products from '@/components/Products';

export default function Home() {
  return (
    <Layout title="Главная">
      <PromoSlider content={PROMO_SLIDES} />

      <Advantages content={ADVATAGES} />

      <section className="container" style={{ padding: '100px 0' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem illo id necessitatibus
        dolorem distinctio culpa, corporis ratione perspiciatis, aperiam a fuga nobis voluptate et!
        Laboriosam nisi nam incidunt libero. Dolorem porro sunt, atque rem, odio iure similique,
        neque commodi esse et modi provident. Similique possimus corrupti enim natus, quam quidem
        iure sit, quasi iste dolorum, libero consequatur? Porro esse veniam quod. Iure, ipsam minus
        magni porro cum blanditiis maiores accusantium labore nesciunt esse assumenda, officiis
        soluta. Quibusdam dolorem quidem quos, fuga debitis dolor nisi alias minus dolores mollitia
        exercitationem dolorum deleniti. Odio autem nesciunt maiores asperiores qui quis laboriosam
        a?
      </section>

      <Products />
    </Layout>
  );
}
