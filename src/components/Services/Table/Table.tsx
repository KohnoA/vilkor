import { memo } from 'react';
import styles from './Table.module.scss';
import { ServicesListType } from '@/types';

interface TableProps {
  data: ServicesListType[];
}

function Table({ data }: TableProps) {
  return (
    <table className={styles.container}>
      <tbody>
        <tr>
          <th>Наименование услуги</th>
          <th className={styles.center}>Цена за</th>
          <th className={styles.center}>Цена от</th>
        </tr>
        {data.map(({ id, name, units, price }) => (
          <tr key={id}>
            <td>{name}.</td>
            <td className={styles.center}>{units ? `${units}.` : '-'}</td>
            <td className={styles.center}>{price ? `${price} руб.` : 'договорная'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(Table);
