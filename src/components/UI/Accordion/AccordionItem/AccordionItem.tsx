import { memo, useState } from 'react';
import styles from './AccordionItem.module.scss';
import { Collapse } from 'react-collapse';
import PlusIcon from '@/components/icons/PlusIcon';
import { AccordionContentType } from '@/types';

type AccordionItemProps = Omit<AccordionContentType[0], 'id'>;

function AccordionItem({ title, list }: AccordionItemProps) {
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

        <button
          className={`${styles.toggler} ${isActive ? styles.toggler_active : ''}`}
          tabIndex={-1}
        >
          <PlusIcon />
        </button>
      </div>

      <Collapse isOpened={isActive}>
        <ul className={styles.list}>
          {list.map(({ name, explanation, id }) => (
            <li key={id} className={styles.item}>
              {name} — <span className={styles.explanation}>{explanation}</span>
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  );
}

export default memo(AccordionItem);
