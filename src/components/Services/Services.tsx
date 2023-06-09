import React from 'react';
import styles from './Services.module.scss';
import { A1_NUMBER } from '@/constants';
import { IServicesGroup } from '@/types';
import ServicesGroup from './ServicesGroup';

interface ServicesProps {
  content: IServicesGroup[];
}

export default function Services({ content }: ServicesProps) {
  return (
    <section className={`container section ${styles.section}`}>
      <h2 className={`title title_center ${styles.title}`}>Наши услуги</h2>

      <p className={styles.moreInfo}>
        За подробной информацией обращайтесь к нам по телефону: {A1_NUMBER}
      </p>

      <ul className={styles.servicesGroups}>
        {content.map((servicesGroup, index) => (
          <ServicesGroup key={index} {...servicesGroup} />
        ))}
      </ul>
    </section>
  );
}
