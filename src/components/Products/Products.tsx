import styles from './Products.module.scss';
import { IProduct } from '@/types';
import Card from '../UI/Card/Card';
import { AppRoutes } from '@/constants';

interface ProductsProps {
  content: IProduct[];
}

export default function Products({ content }: ProductsProps) {
  return (
    <section className={`container section ${styles.section}`}>
      <h2 className={`title title_left ${styles.title}`}>Наша продукция</h2>

      <ul className={styles.list}>
        {content.map(({ id, title, image, category }) => (
          <Card key={id} title={title} image={image} link={`${AppRoutes.PRODUCTS}/${category}`} />
        ))}
      </ul>
    </section>
  );
}
