import { memo } from 'react';
import styles from './Table.module.scss';
import { TableItemType } from '@/types';
import { strIsNumber } from '@/utils/strIsNumber';

interface TableProps {
  head: string[];
  data: TableItemType[];
}

function Table({ head, data }: TableProps) {
  const priceHandler = (price: string | number) => {
    if (typeof price === 'number' || strIsNumber(price)) return `${price} руб`;
    else return price;
  };

  return (
    <table className={styles.container}>
      <tbody>
        <tr>
          {head.map((colTitle, index) => (
            <th key={colTitle} {...(index > 0 ? { className: styles.center } : {})}>
              {colTitle}
            </th>
          ))}
        </tr>
        {data.map(({ id, name, units, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td className={styles.center}>{units ?? '-'}</td>
            <td className={styles.center}>{price ? priceHandler(price) : '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default memo(Table);
