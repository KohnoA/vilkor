import styles from './Products.module.scss';
import { IProduct } from '@/types';
import Card from '../UI/Card/Card';
import { AppRoutes } from '@/constants';
import { useInView } from 'react-intersection-observer';

interface ProductsProps {
  content: IProduct[];
}

export default function Products({ content }: ProductsProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
    >
      <h2 className={`title title_left ${styles.title}`}>Наша продукция</h2>

      <ul className={styles.list}>
        {content.map(({ id, title, image, category }, index) => (
          <Card
            className={styles.card}
            style={{ transitionDelay: `${index / 5 + 0.3}s` }}
            key={id}
            title={title}
            image={image}
            link={`${AppRoutes.PRODUCTS}/${category}`}
          />
        ))}
      </ul>
    </section>
  );
}
