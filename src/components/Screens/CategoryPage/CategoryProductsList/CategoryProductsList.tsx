import { IProductItem } from '@/types';
import { memo } from 'react';
import styles from './CategoryProductsList.module.scss';
import { AppRoutes } from '@/constants';
import Card from '@/components/UI/Card/Card';

interface CategoryProductsListProps {
  products: IProductItem[];
  category: string;
}

function CategoryProductsList({ products, category }: CategoryProductsListProps) {
  return (
    <ul className={styles.list}>
      {products.map(({ fraction, volume, price, id, title, images, stock }) => {
        const [preview] = images;

        return (
          <Card
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
  );
}

export default memo(CategoryProductsList);
