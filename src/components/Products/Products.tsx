import React from 'react';
import styles from './Products.module.scss';
import Image from 'next/image';
import Button from '../UI/Button/Button';
import Link from 'next/link';
import { IProduct } from '@/types';

interface ProductsProps {
  content: IProduct[];
}

export default function Products({ content }: ProductsProps) {
  return (
    <section className={`container section ${styles.products}`}>
      <h2 className={`title title_left ${styles.products__title}`}>Наша продукция</h2>

      <ul className={styles.products__list}>
        {content.map((product) => (
          <li key={product.title}>
            <Link href={product.link} className={styles.products__item}>
              <div className={styles.products__imageWrapper}>
                <Image className={styles.products__image} src={product.image} alt="Test" />
              </div>

              <h3 className={styles.products__name}>{product.title}</h3>

              <div className={styles.products__buttonWrapper}>
                <Button additionalClasses={styles.products__button} text="Подробнее &rsaquo;" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
