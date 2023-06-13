import styles from './Advantages.module.scss';
import { IconColor } from '@/constants';
import { IAdvatage } from '@/types';

interface AdvantagesProps {
  content: IAdvatage[];
}

export default function Advantages({ content }: AdvantagesProps) {
  return (
    <div className={`container section ${styles.advantages}`}>
      <h2 className={`title title_center ${styles.advantages__title}`}>
        Почему именно <span className={styles.advantages__title_we}>мы</span>?
      </h2>

      <p className={styles.advantages__tagline}>Более 3-ёх лет успешной работы</p>

      <ul className={styles.advantages__list}>
        {content.map(({ Icon, title, desc }) => (
          <li key={title} className={styles.advantage}>
            <Icon width={60} height={60} color={IconColor.GREEN} />

            <h3 className={styles.advantage__title}>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
