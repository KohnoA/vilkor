import { useState, CSSProperties, useCallback, useEffect } from 'react';
import styles from './WorkItem.module.scss';
import { IWork } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ModalContent from '../ModalContent/ModalContent';
import { useRouter } from 'next/router';

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
  const { query, replace } = useRouter();

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const showModalHanlder = () => {
    replace({ query: { ...query, work: title } }, undefined, { shallow: true });
  };

  const closeModalHandler = useCallback(() => {
    delete query?.work;
    replace({ query: query }, undefined, { shallow: true });
  }, [replace, query]);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.code === 'Enter') {
      showModalHanlder();
    }
  };

  useEffect(() => {
    if (query?.work && query?.work === title) {
      setIsShowModal(true);
    } else {
      setIsShowModal(false);
    }
  }, [query, title]);

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
