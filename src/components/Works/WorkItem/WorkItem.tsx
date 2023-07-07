import { useState, CSSProperties, useCallback } from 'react';
import styles from './WorkItem.module.scss';
import { IWork } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ModalContent from '../ModalContent/ModalContent';

const ModalLazy = dynamic(() => import('@/components/UI/Modal/Modal'), {
  ssr: false,
});

interface WorkItemProps {
  className?: string;
  style?: CSSProperties;
  content: IWork;
}

export default function WorkItem({ className, style, content }: WorkItemProps) {
  const { title, desc, images } = content;
  const [preview, hoverPreview] = images;

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const showModalHanlder = () => setIsShowModal(true);

  const closeModalHandler = useCallback(() => setIsShowModal(false), []);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.code === 'Enter') {
      showModalHanlder();
    }
  };

  return (
    <>
      <li
        className={`${styles.item} ${className ?? ''}`}
        style={style}
        onClick={showModalHanlder}
        onKeyDown={keyboardHandler}
        role="tab"
        tabIndex={0}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={preview}
            alt="Пример наших работ"
            className={styles.image}
            placeholder="blur"
            blurDataURL={preview.blurDataURL}
            sizes="600px"
          />

          <Image
            src={hoverPreview}
            alt="Пример наших работ"
            className={`${styles.image} ${styles.image_hoverPreview}`}
            placeholder="blur"
            blurDataURL={hoverPreview.blurDataURL}
            sizes="600px"
          />
        </div>

        <p className={`title title_left ${styles.title}`}>{title}</p>

        <p>{desc}</p>
      </li>

      <ModalLazy isActive={isShowModal} closeHandler={closeModalHandler}>
        <ModalContent images={images} title={title} desc={desc} />
      </ModalLazy>
    </>
  );
}
