import styles from './Notes.module.scss';

interface PeatNoteProps {
  title: string;
}

export default function PeatNote({ title }: PeatNoteProps) {
  return (
    <div className={styles.note}>
      <p>Торф - 100% натуральный продукт.</p>
      <p>Торф сеянный, без лишнего мусора и примесей.</p>

      {title.includes('верховой') && (
        <p className={styles.note__paragraph}>
          Используется для выращивания: черники, голубики, хвойных растений, и других растений
          семейства вересковых. В составе имеются полезные микроэлементы и минеральные вещества: K,
          P, N, Ca, гуминовые кислоты. Они ускорят рост куста голубики и питают растение.
        </p>
      )}
    </div>
  );
}
