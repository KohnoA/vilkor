import styles from '../ProductPage.module.scss';

interface MulchNoteProps {
  title: string;
}

export default function MulchNote({ title }: MulchNoteProps) {
  return (
    <div className={styles.note}>
      <p>{title} - 100% натуральный продукт.</p>
      <p className={styles.note__listDesc}>Этот мульчирующий материал поможет вам:</p>
      <ul>
        <li>📍Избавиться от сорняков</li>
        <li>📍Сохранить влагу в почве</li>
        <li>📍Улучшить качество грунта</li>
        <li>📍Сделать красивым дачный участок</li>
        <li>📍Тратить меньше сил на уход за участком и больше отдыхать</li>
      </ul>
    </div>
  );
}
