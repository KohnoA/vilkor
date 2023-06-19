import { memo } from 'react';
import styles from './Accordion.module.scss';
import AccordionItem from './AccordionItem/AccordionItem';
import { AccordionContentType } from '@/types';

interface AccordionProps {
  content: AccordionContentType;
}

function Accordion({ content }: AccordionProps) {
  return (
    <ul className={styles.list}>
      {content.map(({ id, title, list }) => (
        <AccordionItem key={id} title={title} list={list} />
      ))}
    </ul>
  );
}

export default memo(Accordion);
