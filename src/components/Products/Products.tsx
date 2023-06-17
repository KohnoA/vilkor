import styles from './Products.module.scss';
import { IProduct } from '@/types';
import Card from '../UI/Card/Card';

interface ProductsProps {
  content: IProduct[];
}

export default function Products({ content }: ProductsProps) {
  return (
    <section className={`container section ${styles.section}`}>
      <h2 className={`title title_left ${styles.title}`}>Наша продукция</h2>

      <ul className={styles.list}>
        {content.map((product) => (
          <Card key={product.id} content={product} link={product.link} />
        ))}
      </ul>
    </section>
  );
}
