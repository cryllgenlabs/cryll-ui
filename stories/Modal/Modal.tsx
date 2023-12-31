import styles from "./Modal.module.scss";

import React, { ReactNode } from "react";

interface ModalProps {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export default function Modal({
  title,
  isOpen,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={`${styles.modalHeader} px-5 py-3`}>
          <h1>{title}</h1>
          <button onClick={onClose}>x</button>
        </div>
        <div className={`${styles.modalBody} p-5`}>{children}</div>
      </div>
    </div>
  );
}
