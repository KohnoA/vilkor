import { useInView } from 'react-intersection-observer';
import styles from './PlantsInfo.module.scss';

export default function PlantsInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`container section single-section-page ${styles.section} ${
        inView ? styles.section_animate : ''
      }`}
    >
      <h2 className={`title title_center ${styles.title}`}>Полезная информация</h2>
      <p className={styles.desc}>
        <b className={styles.mark}>Декоративные растения</b> – идеальное украшение загородного
        участка, которого так часто не хватает на дачах, предназначенных лишь для получения урожаев.
        Тем не менее их роль достаточно велика:
      </p>

      <ul className={styles.list}>
        <li>украшают собой участок, придает ему эстетичный внешний вид.</li>

        <li>насыщение окружающей среды кислородом, поглощение углекислого газа.</li>

        <li>выделение в воздух различных полезных веществ.</li>

        <li>
          при посадке вдоль периметра участка – защита людей, плодовых растений от пыли,
          загазованности.
        </li>

        <li>
          в жаркий день густые кроны деревьев укроют в своей тени хозяев дачи от летнего зноя.
        </li>

        <li>«живая изгородь» защитит участок с низким или сетчатым забором от посторонних глаз.</li>

        <li>
          густые декоративные кусты вдоль забора не дадут сильным ветрам повлиять на овощные,
          ягодные культуры.
        </li>
      </ul>
    </section>
  );
}
