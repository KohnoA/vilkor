import styles from './BarkInfo.module.scss';
import { useInView } from 'react-intersection-observer';

const BARK_ADVATAGES_LIST = [
  'Определяемся с местом мульчирования: клумба, сад или грядки.',
  'Количество материала и фракция (размер) коры: приблизительно 1 пакет на 1 м2.',
  'Кора может быть мелкой, средней, крупной фракции.',
  'Для мульчирования растений лучше всего подходят мелкая или средняя фракция.',
  'Если вы хотите задекорировать пространство, то на помощь придёт средняя фракция.',
  'Рекомендуем вначале мульчировать мелкой фракцией, со временем она превратится в гумус и вы получите прекрасный уход за почвой.',
  'Чтобы сократить рост сорняков, положите кору слоем в 5-7 см.',
  'Кора сосны сохранит влагу, защитит корни растений от палящего солнца, сохранит нужную температуру, в случае резких перепадов температур.',
  'В случае посадки новых растений, их мульчирование может производиться в любое время.',
  'Новый слой мульчи может быть досыпан поверх старого, причём его толщина может быть меньше. Такая процедура проводиться в любое время года, кроме зимы. Оденем почву красиво',
];

export default function BarkInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`container section single-section-page ${styles.section} ${
        inView ? styles.section_animate : ''
      }`}
    >
      <h2 className={`title title_left ${styles.title}`}>Отсутствует опыт мульчирования почвы?</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit ipsum voluptate
        placeat necessitatibus voluptatem doloribus eum quas doloremque obcaecati? Ab, sit?
        Excepturi quia similique maiores corporis unde aut qui voluptatibus, velit necessitatibus
        aliquam provident illo cumque quibusdam nulla quidem? Ad nesciunt non iusto, fugit,
        reiciendis enim facere quis dolorem saepe eius, recusandae laboriosam! Maiores rerum fugit
        labore velit! Quos asperiores laudantium saepe quas facere? At, culpa cupiditate tempora
        velit similique autem. Aliquid adipisci neque a sint vel libero expedita et mollitia, sed
        quo quia, facere quos assumenda amet porro reprehenderit unde sapiente incidunt laborum
        tenetur. Nobis beatae quas culpa.
      </p>

      {/* <h4 className={styles.subTitle}>10 ЗОЛОТЫХ СОВЕТОВ вам помогут!</h4>

      <p className={styles.desc}>
        Кора сосны подойдёт для мульчирования 💯%, ведь она не только полезна и долговечна, но и
        красива. Итак:
      </p>

      <ol className={styles.list}>
        {BARK_ADVATAGES_LIST.map((advatage, index) => (
          <li className={styles.item} key={index}>
            <span className={styles.num}>🌿{index + 1}.</span> {advatage}
          </li>
        ))}
      </ol> */}
    </section>
  );
}
