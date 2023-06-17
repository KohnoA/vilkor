import Layout from '@/components/UI/Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PRODUCTS } from '@/constants/products';
import Card from '@/components/UI/Card/Card';
import { IProduct, IProductItem } from '@/types';
import styles from './CategoryPage.module.scss';
import { AppRoutes } from '@/constants';
import dynamic from 'next/dynamic';

const Background = dynamic(() => import('@/components/UI/Background/Background'), { ssr: false });

interface CategoryPageProps {
  category: IProduct;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const { title, items } = category;
  const testItems = items as IProductItem[];

  return (
    <Layout title={title}>
      <section className={`container section ${styles.section}`}>
        <h2 className={`title title_left`}>{title}</h2>

        <ul className={styles.list}>
          {testItems.map(({ fraction, volume, price, id, title, images }) => {
            const [preview] = images;

            return (
              <Card
                key={id}
                title={title}
                image={preview}
                link={`${AppRoutes.PRODUCTS_BARK}/${id}`}
              >
                <div className={styles.productInfo}>
                  <div className={styles.productInfo__FracAndVolum}>
                    <p>Фракция: {fraction}</p>
                    <p>Объем: {volume}</p>
                  </div>

                  <div className={styles.productInfo__stockAndPrice}>
                    <p className={styles.productInfo__stock}>В наличии</p>
                    <p className={styles.productInfo__price}>{price}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </ul>
      </section>

      <Background>
        <section className={`container section ${styles.infoSection}`}>
          <h2 className={`title title_left`}>Отсутствует опыт мульчирования почвы?</h2>

          <h4 className={styles.infoSection__subTitle}>10 ЗОЛОТЫХ СОВЕТОВ вам помогут!</h4>

          <p className={styles.infoSection__desc}>
            Кора сосны подойдёт для мульчирования 💯%, ведь она не только полезна и долговечна, но и
            красива. Итак:
          </p>

          <ol className={styles.infoSection__list}>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿1.</span> Определяемся с местом
              мульчирования: клумба, сад или грядки.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿2.</span> Количество материала и фракция
              (размер) коры: приблизительно 1 пакет на 1 м2.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿3.</span> Кора может быть мелкой, средней,
              крупной фракции.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿4.</span> Для мульчирования растений лучше
              всего подходят мелкая или средняя фракция.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿5.</span> Если вы хотите задекорировать
              пространство, то на помощь придёт средняя фракция.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿6.</span> Рекомендуем вначале мульчировать
              мелкой фракцией, со временем она превратится в гумус и вы получите прекрасный уход за
              почвой.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿7.</span> Чтобы сократить рост сорняков,
              положите кору слоем в 5-7 см.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿8.</span> Кора сосны сохранит влагу,
              защитит корни растений от палящего солнца, сохранит нужную температуру, в случае
              резких перепадов температур.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿9.</span> В случае посадки новых растений,
              их мульчирование может производиться в любое время.
            </li>
            <li className={styles.infoSection__item}>
              <span className={styles.infoSection__num}>🌿10.</span> Новый слой мульчи может быть
              досыпан поверх старого, причём его толщина может быть меньше. Такая процедура
              проводиться в любое время года, кроме зимы. Оденем почву красиво
            </li>
          </ol>
        </section>
      </Background>
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
  const { category: currentCategoryPath } = context.params ?? {};
  const category = PRODUCTS.find(({ category }) => category === currentCategoryPath);

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: { category },
  };
};
