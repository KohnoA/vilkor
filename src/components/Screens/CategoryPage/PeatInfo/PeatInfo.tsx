import styles from './PeatInfo.module.scss';
import { useInView } from 'react-intersection-observer';

export default function PeatInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`container section single-section-page ${styles.section} ${
        inView ? styles.section_animate : ''
      }`}
    >
      <h2 className={`title title_left ${styles.title}`}>Что нужно знать о торфе</h2>

      <p className={styles.advatages}>
        В первую очередь торф используется для улучшения структуры почвы. Благодаря своей
        волокнистости и комковатости, внесенный в почву торф делает ее воздухо- и влагопроницаемой:
        она дышит, легко насыщается влагой и удерживает ее. Если в землю добавлен торф, корням
        растений легче развиваться. Испортить землю или грядку торфом практически невозможно.
        Вносить его в грунт можно в любых количествах. А норма - это четыре-пять ведер на один
        квадратный метр
      </p>

      <p style={{ marginBottom: '20px' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam consequuntur nulla
        quibusdam. Qui, sed facilis. Adipisci ut molestiae quidem? Obcaecati quasi adipisci, facilis
        illum unde doloribus excepturi cum repellendus iure amet accusantium autem fugiat voluptate
        reprehenderit enim temporibus laboriosam ipsum praesentium tempora suscipit quae sunt
        voluptas veniam. Dignissimos, consectetur sed? Nihil dolorem placeat error et inventore nisi
        perspiciatis debitis natus voluptatem delectus nobis aperiam, voluptatibus esse molestias
        porro deserunt fuga, veritatis aspernatur dolor corrupti quod dolores dolorum maxime
        adipisci? Error veniam, inventore voluptates totam quam ducimus nostrum porro ea. In
        eligendi suscipit doloribus, corporis dolor nihil incidunt reiciendis laborum laudantium?
      </p>

      <p className={styles.listDesc}>Важные показатели торфа:</p>
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
