import React from "react";
import styles from "./index.module.css";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const stopPropagation = React.useCallback(
    (e: React.MouseEvent) => e.stopPropagation(),
    []
  );

  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
