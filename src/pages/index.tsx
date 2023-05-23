import Layout from '@/components/UI/Layout';
import PromoSlider from '@/components/PromoSlider';
import Advantages from '@/components/Advantages';
import { ADVATAGES } from '@/constants/advantages';
import { PROMO_SLIDES } from '@/constants/promoSlides';
import Products from '@/components/Products';
import { PRODUCTS } from '@/constants/products';

export default function Home() {
  return (
    <Layout title="Главная">
      <PromoSlider content={PROMO_SLIDES} />

      <Advantages content={ADVATAGES} />

      <Products content={PRODUCTS} />

      <section className="container" style={{ padding: '100px 15px' }}>
        <h3>Услуги</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nemo assumenda beatae
        adipisci quas fugiat nisi? Veritatis amet suscipit veniam nesciunt tempora. Voluptatem at
        enim, sint nisi magnam saepe impedit accusamus perspiciatis tenetur quisquam, corrupti
        corporis quasi facilis, dolor iure. Nesciunt ut aliquam corporis blanditiis! Voluptates
        harum, similique aliquid possimus obcaecati saepe iusto ab vel dolore sit porro expedita
        quibusdam quia quas odit fuga! Provident eligendi reprehenderit vero eos asperiores qui
        ipsam accusamus ipsum aspernatur tenetur ipsa esse omnis fugit quia molestiae dolores quos
        eveniet quae adipisci, numquam corporis! Odit vero quis accusamus facilis! Rem
        exercitationem deleniti suscipit dolore ratione.
      </section>

      <section className="container" style={{ padding: '100px 15px' }}>
        <h3>Нашм работы</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nemo assumenda beatae
        adipisci quas fugiat nisi? Veritatis amet suscipit veniam nesciunt tempora. Voluptatem at
        enim, sint nisi magnam saepe impedit accusamus perspiciatis tenetur quisquam, corrupti
        corporis quasi facilis, dolor iure. Nesciunt ut aliquam corporis blanditiis! Voluptates
        harum, similique aliquid possimus obcaecati saepe iusto ab vel dolore sit porro expedita
        quibusdam quia quas odit fuga! Provident eligendi reprehenderit vero eos asperiores qui
        ipsam accusamus ipsum aspernatur tenetur ipsa esse omnis fugit quia molestiae dolores quos
        eveniet quae adipisci, numquam corporis! Odit vero quis accusamus facilis! Rem
        exercitationem deleniti suscipit dolore ratione.
      </section>

      <section className="container" style={{ padding: '100px 15px' }}>
        <h3>Контакты</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nemo assumenda beatae
        adipisci quas fugiat nisi? Veritatis amet suscipit veniam nesciunt tempora. Voluptatem at
        enim, sint nisi magnam saepe impedit accusamus perspiciatis tenetur quisquam, corrupti
        corporis quasi facilis, dolor iure. Nesciunt ut aliquam corporis blanditiis! Voluptates
        harum, similique aliquid possimus obcaecati saepe iusto ab vel dolore sit porro expedita
        quibusdam quia quas odit fuga! Provident eligendi reprehenderit vero eos asperiores qui
        ipsam accusamus ipsum aspernatur tenetur ipsa esse omnis fugit quia molestiae dolores quos
        eveniet quae adipisci, numquam corporis! Odit vero quis accusamus facilis! Rem
        exercitationem deleniti suscipit dolore ratione.
      </section>
    </Layout>
  );
}
