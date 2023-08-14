import { ReactNode, memo, useState } from 'react';
import styles from './AccordionItem.module.scss';
import PlusIcon from '@/components/icons/PlusIcon';
import Collapse from '../../Collapse/Collapse';

export type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const stateToggler = () => setIsActive(!isActive);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      stateToggler();
    }
  };

  return (
    <li className={styles.container}>
      <div
        className={styles.header}
        onClick={stateToggler}
        onKeyDown={keyboardHandler}
        role="button"
        tabIndex={0}
      >
        <p className={styles.header__title}>{title}</p>

        <div className={`${styles.toggler} ${isActive ? styles.toggler_active : ''}`} tabIndex={-1}>
          <PlusIcon />
        </div>
      </div>

      <Collapse isActive={isActive}>
        <div className={styles.children}>{children}</div>
      </Collapse>
    </li>
  );
}

export default memo(AccordionItem);
