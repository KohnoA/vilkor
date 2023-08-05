import { ReactElement, memo } from 'react';
import styles from './Accordion.module.scss';
import { AccordionItemProps } from './AccordionItem/AccordionItem';

interface AccordionProps {
  className?: string;
  title?: string;
  children: ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[];
}

function Accordion({ className, title, children }: AccordionProps) {
  return (
    <ul className={`${styles.list} ${className ?? ''}`}>
      {title && (
        <li className={styles.header}>
          <span>{title}</span>
        </li>
      )}

      {children}
    </ul>
  );
}

export default memo(Accordion);
