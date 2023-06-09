import React, { useState } from 'react';
import styles from './ServicesGroup.module.scss';
import { Collapse } from 'react-collapse';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import { IService } from '@/types';

interface ServicesGroupProps {
  title: string;
  services: IService[];
}

function ServicesGroup({ title, services }: ServicesGroupProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const stateToggler = () => setIsActive((prev) => !prev);

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
          <ArrowDownIcon />
        </button>
      </div>

      <Collapse isOpened={isActive}>
        <ul className={styles.services__list}>
          {services.map(({ service, price }, index) => (
            <li key={index} className={styles.services__item}>
              {service} — {price}
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  );
}

export default React.memo(ServicesGroup);
