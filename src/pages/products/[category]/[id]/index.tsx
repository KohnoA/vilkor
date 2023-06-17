import Gallery from '@/components/UI/Gallery/Gallery';
import Layout from '@/components/UI/Layout/Layout';
import { PRODUCTS } from '@/constants/products';
import { IProductItem } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import styles from './ProductPage.module.scss';
import SocialsList from '@/components/SocialsList/SocialsList';
import { A1_NUMBER, A1_NUMBER_REF, IconColor } from '@/constants';
import Texture from '@/components/UI/Texture/Texture';
import Link from 'next/link';
import Image from 'next/image';
import a1Logo from 'public/images/logo-a1.png';

interface ProdcutPageProps {
  product: IProductItem;
}

export default function ProductPage({ product }: ProdcutPageProps) {
  const { title, image, price, fraction, volume } = product;
  return (
    <Layout title={title}>
      <Texture>
        <section className={`container section single-section-page ${styles.section}`}>
          <h2 className={`title title_center ${styles.title}`}>{title}</h2>
          <div className={styles.wrapper}>
            <Gallery images={[image, image, image]} />

            <div className={styles.info}>
              <div>
                <h3 className={`title title_left ${styles.subTitle}`}>Информация о товаре</h3>
                <div className={styles.productProps}>
                  <p>Фракция: {fraction}</p>
                  <p>Упаковка: Мешок</p>
                  <p>Объем: {volume}</p>
                </div>

                <div className={styles.note}>
                  <p>Сосновая кора - 100% натуральный продукт.</p>
                  <p className={styles.note__listDesc}>Наша кора поможет вам:</p>
                  <ul>
                    <li>📍Избавиться от сорняков</li>
                    <li>📍Сохранить влагу в почве</li>
                    <li>📍Улучшить качество грунта</li>
                    <li>📍Сделать красивым дачный участок</li>
                    <li>📍Тратить меньше сил на уход за участком и больше отдыхать</li>
                  </ul>
                </div>

                <p className={styles.stock}>В наличии</p>

                <p className={styles.price}>Цена: {price}</p>
              </div>

              <div>
                <div className={styles.number}>
                  <p className={styles.number__desc}>Позвонить с сайта:</p>
                  <Link href={A1_NUMBER_REF} className={styles.number__link}>
                    <Image
                      src={a1Logo}
                      width={20}
                      height={20}
                      sizes="60px"
                      alt="Мобильный оператор А1"
                    />
                    {A1_NUMBER}
                  </Link>
                </div>

                <div className={styles.socials}>
                  <p className={styles.socials__desc}>Принимаем заказы в социальных сетях:</p>
                  <SocialsList full color={IconColor.GREEN} />
                </div>

                <p className={styles.mark}>Осуществляем доставку по всей Беларуси!</p>
              </div>
            </div>
          </div>
        </section>
      </Texture>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category: categoryRoute, id } = context.params ?? {};
  const category = PRODUCTS.find(({ category }) => category === categoryRoute);
  const product = category?.items.find((item) => item.id.toString() === id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
};
