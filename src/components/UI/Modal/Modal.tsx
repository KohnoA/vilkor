import { memo, useEffect, useRef, useState } from 'react';
import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import PlusIcon from '@/components/icons/PlusIcon';
import { IconColor } from '@/constants';
import { CSSTransition } from 'react-transition-group';

interface ModalProps {
  isActive: boolean;
  children: React.ReactNode;
  closeHandler: () => void;
}

function Modal({ isActive, children, closeHandler }: ModalProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const animatedRef = useRef<null | HTMLDivElement>(null);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      closeHandler();
    }
  };

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <>
      <CSSTransition
        in={isActive}
        timeout={300}
        classNames="modal"
        nodeRef={animatedRef}
        unmountOnExit
      >
        <div
          ref={animatedRef}
          className={styles.backdrop}
          onClick={closeHandler}
          onKeyDown={keyboardHandler}
          role="button"
          tabIndex={0}
        >
          <div
            className={`modal-content-animation ${styles.content}`}
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
            role="button"
            tabIndex={-1}
          >
            <span
              className={styles.close}
              onClick={closeHandler}
              onKeyDown={keyboardHandler}
              role="button"
              tabIndex={0}
            >
              <PlusIcon color={IconColor.BLACK} width={30} height={30} />
            </span>
            {children}
          </div>
        </div>
      </CSSTransition>
    </>,
    document.getElementById('modal') as HTMLElement
  );
}

export default memo(Modal);
