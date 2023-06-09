import React from 'react';
import styles from './Works.module.scss';
import Button from '../UI/Button/Button';

export default function Works() {
  return (
    <section className={`container section`}>
      <h3 className={`title title_center ${styles.works__title}`}>Наши работы</h3>
      <p>
        Мы поможем реализовать ваши желания или предложить свои варианты тюнинга вашего автомобиля
      </p>

      <p>Чтобы увидеть больше наших работ, переходите в наш инстаграм</p>
      <Button text="Перейти в Instagram" />
    </section>
  );
}
