import { useState } from 'react';
import styles from './WorkItem.module.scss';
import { IWork } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import InstagramLogo from '@/components/icons/InstagramLogo';
import { INSTAGRAM_LINK, IconColor } from '@/constants';
import Gallery from '@/components/UI/Gallery/Gallery';

const ModalLazy = dynamic(() => import('@/components/UI/Modal/Modal'), {
  ssr: false,
});

interface WorkItemProps {
  content: IWork;
}

export default function WorkItem({ content }: WorkItemProps) {
  const { title, desc, images } = content;
  const [preview, hoverPreview] = images;

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const showModalHanlder = () => setIsShowModal(true);

  const closeModalHandler = () => setIsShowModal(false);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.code === 'Enter') {
      showModalHanlder();
    }
  };

  return (
    <>
      <li
        className={styles.item}
        onClick={showModalHanlder}
        onKeyDown={keyboardHandler}
        role="tab"
        tabIndex={0}
      >
        <div className={styles.item__imageWrapper}>
          <Image
            src={preview}
            alt="Пример наших работ"
            className={styles.item__image}
            placeholder="blur"
            blurDataURL={preview.blurDataURL}
          />

          <Image
            src={hoverPreview}
            alt="Пример наших работ"
            className={`${styles.item__image} ${styles.item__image_hoverPreview}`}
            placeholder="blur"
            blurDataURL={hoverPreview.blurDataURL}
          />
        </div>

        <p className={`title title_left ${styles.item__title}`}>{title}</p>

        <p>{desc}</p>
      </li>

      <ModalLazy isActive={isShowModal} closeHandler={closeModalHandler}>
        <div className={styles.modalContent}>
          <Gallery images={images} />

          <div className={styles.modalContent__info}>
            <div>
              <p className={`title title_left ${styles.item__title}`}>{title}</p>
              <p>{desc}</p>
            </div>

            <div className={styles.modalContent__more}>
              <p className={styles.modalContent__moreDesc}>
                Хотите увидеть больше наших работ? <br /> Тогда переходите к нам в инстаграм!
              </p>
              <Button href={INSTAGRAM_LINK}>
                <InstagramLogo color={IconColor.WHITE} /> Наш Инстаграм
              </Button>
            </div>
          </div>
        </div>
      </ModalLazy>
    </>
  );
}
