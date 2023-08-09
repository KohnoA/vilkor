import { memo } from 'react';
import styles from './Table.module.scss';
import { TableItemType } from '@/types';

interface TableProps {
  className?: string;
  firstColTitle: string;
  data: TableItemType[];
}

function Table({ className, firstColTitle, data }: TableProps) {
  return (
    <table className={`${styles.container} ${className ?? ''}`}>
      <tbody>
        <tr>
          <th className={styles.center}>{firstColTitle}</th>
          <th className={styles.center}>Цена за</th>
          <th className={styles.center}>Цена от</th>
        </tr>
        {data.map(({ id, name, units, price }) => (
          <tr key={id}>
            <td className={styles.left}>{name}</td>
            <td className={styles.center}>{units ?? '-'}</td>
            <td className={styles.center}>{price ?? '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(Table);
