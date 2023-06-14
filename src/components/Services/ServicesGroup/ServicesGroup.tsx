import { memo, useState } from 'react';
import styles from './ServicesGroup.module.scss';
import { Collapse } from 'react-collapse';
import { IService } from '@/types';
import PlusIcon from '@/components/icons/PlusIcon';

interface ServicesGroupProps {
  title: string;
  services: IService[];
}

function ServicesGroup({ title, services }: ServicesGroupProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const stateToggler = () => setIsActive(!isActive);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      stateToggler();
    }
  };

  return (
    <li className={styles.item}>
      <div
        className={styles.header}
        onClick={stateToggler}
        onKeyDown={keyboardHandler}
        role="button"
        tabIndex={0}
      >
        <p>{title}</p>

        <button
          className={`${styles.toggler} ${isActive ? styles.toggler_active : ''}`}
          tabIndex={-1}
        >
          <PlusIcon />
        </button>
      </div>

      <Collapse isOpened={isActive}>
        <ul className={styles.services__list}>
          {services.map(({ service, price }, index) => (
            <li key={index} className={styles.services__item}>
              {service} — <span className={styles.services__price}>{price}</span>
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  );
}

export default memo(ServicesGroup);
