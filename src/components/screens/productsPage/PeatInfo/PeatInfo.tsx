import styles from './PeatInfo.module.scss';
import { useInView } from 'react-intersection-observer';

export default function PeatInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`container section single-section-page ${styles.section} ${
        inView ? styles.section_animate : ''
      }`}
    >
      <h2 className={`title title_center ${styles.title}`}>Полезная информация</h2>

      <p className={styles.advatages}>
        В первую очередь торф используется для улучшения структуры почвы. Благодаря своей
        волокнистости и комковатости, внесенный в почву торф делает ее воздухо- и влагопроницаемой:
        она дышит, легко насыщается влагой и удерживает ее. Если в землю добавлен торф, корням
        растений легче развиваться. Испортить землю или грядку торфом практически невозможно.
        Вносить его в грунт можно в любых количествах. А норма - это четыре-пять ведер на один
        квадратный метр
      </p>

      <p className={`title title_left ${styles.listDesc}`}>Важные показатели торфа:</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          Торф нейтральный отличается массой органических элементов, не содержит сорных растений и
          вредных микроорганизмов.
        </li>
        <li className={styles.item}>
          У данного продукта отличная воздухопроницаемость и высокая поглощаемость влаги.
        </li>
        <li className={styles.item}>
          Экологически чистый и однородный продукт используют в качестве основы при изготовлении
          питательных грунтов.
        </li>
        <li className={styles.item}>
          За счет того, что торф верховой кислый, использовать его можно для химической мелиорации
          щелочных почв.
        </li>
        <li className={styles.item}>
          Высокий уровень воздухом и влагоемкости. Благодаря этому агрономы имеют возможность
          улучшить свойства как легких песчаных, так и тяжелых глинистых почв.
        </li>
      </ul>
    </section>
  );
}
