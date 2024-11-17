// react
import { FC, ReactNode } from 'react'
// ui
import { Portal } from '../Portal';
// styles
import styles from './Modal.module.scss'

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ openModal, setOpenModal, children }) => {
  const removeFormAdition = () => {
    setOpenModal(false);
  };
return openModal ? (
  <Portal>
    <div className={styles.modal} onClick={removeFormAdition}>
      <div className={styles.popupActive} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close}>X</div>
        {children}
      </div>
    </div>
  </Portal>
) : null;
}
