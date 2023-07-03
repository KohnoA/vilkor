import { IProductItem } from '@/types';
import { memo } from 'react';
import styles from './CategoryProductsList.module.scss';
import { AppRoutes } from '@/constants';
import Card from '@/components/UI/Card/Card';
import { useInView } from 'react-intersection-observer';

interface CategoryProductsListProps {
  title: string;
  products: IProductItem[];
  category: string;
}

function CategoryProductsList({ title, products, category }: CategoryProductsListProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
    >
      <h2 className={`title title_left ${styles.title}`}>{title}</h2>

      <ul className={styles.list}>
        {products.map(({ fraction, volume, price, id, title, images, stock }, index) => {
          const [preview] = images;

          return (
            <Card
              className={styles.card}
              style={{ transitionDelay: `${index / 5 + 0.3}s` }}
              key={id}
              title={title}
              image={preview}
              link={`${AppRoutes.PRODUCTS}/${category}/${id}`}
            >
              <div className={styles.cardInfo}>
                <div className={styles.cardInfo__FracAndVolum}>
                  {fraction && <p>Фракция: {fraction}</p>}
                  {volume && <p>Объем: {volume}</p>}
                </div>

                <div className={styles.cardInfo__stockAndPrice}>
                  <p
                    className={`${styles.cardInfo__stock} ${
                      stock ? styles.cardInfo__stock_true : styles.cardInfo__stock_false
                    }`}
                  >
                    {stock ? 'В наличии' : 'Нет в наличии'}
                  </p>
                  <p className={styles.cardInfo__price}>{price}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </ul>
    </section>
  );
}

export default memo(CategoryProductsList);
