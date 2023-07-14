import styles from './Advantages.module.scss';
import { IconColor } from '@/constants';
import { IAdvatage } from '@/types';
import { useInView } from 'react-intersection-observer';

interface AdvantagesProps {
  content: IAdvatage[];
}

export default function Advantages({ content }: AdvantagesProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`container section ${styles.advantages} ${
        inView ? styles.advantages_animate : ''
      }`}
    >
      <h2 className={`title title_center ${styles.advantages__title}`}>
        Почему именно <span className={styles.advantages__title_we}>мы</span>?
      </h2>

      <p className={`subTitle ${styles.advantages__tagline}`}>Более 3-ёх лет успешной работы</p>

      <ul className={styles.advantages__list}>
        {content.map(({ Icon, title, desc }, index) => (
          <li
            key={title}
            className={styles.advantage}
            style={{ transitionDelay: `${index / 3 + 0.5}s` }}
          >
            <Icon width={60} height={60} color={IconColor.GREEN} />

            <h3 className={styles.advantage__title}>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
