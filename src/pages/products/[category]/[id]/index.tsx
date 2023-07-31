import Gallery from '@/components/UI/Gallery/Gallery';
import Layout from '@/components/UI/Layout/Layout';
import { PRODUCTS } from '@/constants/products';
import { IProductItem } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import styles from '@/components/Screens/ProductPage/ProductPage.module.scss';
import MulchNote from '@/components/Screens/ProductPage/Notes/MulchNote';
import BarkNote from '@/components/Screens/ProductPage/Notes/BarkNote';
import ContactsInfo from '@/components/Screens/ProductPage/ContactsInfo/ContactsInfo';
import PeatNote from '@/components/Screens/ProductPage/Notes/PeatNote';
import { ProductCategory } from '@/constants';
import { useInView } from 'react-intersection-observer';

interface ProdcutPageProps {
  product: IProductItem;
  category: ProductCategory;
}

export default function ProductPage({ product, category }: ProdcutPageProps) {
  const { title, images, price, fraction, volume, packaging, stock, acidity } = product;
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Layout title={title}>
      <section
        ref={ref}
        className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
      >
        <h2 className={`title title_center ${styles.title}`}>{title}</h2>
        <div className={styles.wrapper}>
          <Gallery className={styles.gallery} images={images} />

          <div className={styles.info}>
            <div>
              <h3 className={`title title_left ${styles.subTitle}`}>Информация о товаре</h3>
              <div className={styles.productProps}>
                {acidity && <p>Кислотность: {acidity}</p>}
                {fraction && <p>Фракция: {fraction}</p>}
                {packaging && <p>Упаковка: {packaging}</p>}
                {volume && <p>Объем: {volume}</p>}
              </div>

              {category === ProductCategory.MULCH && <MulchNote title={title} />}
              {category === ProductCategory.BARK && <BarkNote />}
              {category === ProductCategory.PEAT && <PeatNote title={title} />}

              <p className={`${styles.stock} ${stock ? styles.stock_true : styles.stock_false}`}>
                {stock ? 'В наличии' : 'Нет в наличии'}
              </p>

              <p className={styles.price}>Цена: {price}</p>
            </div>

            <ContactsInfo />
          </div>
        </div>
      </section>
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
  const productCategory = PRODUCTS.find(({ category }) => category === categoryRoute);
  const product = productCategory?.items.find((item) => item.id.toString() === id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product, category: categoryRoute },
  };
};
