import React from "react";
import styles from "./ImageModal.module.css";
import { Image } from "../App/App.types";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeBtn}>
          ×
        </button>
        <img src={image.full} alt={image.title} className={styles.modalImage} />
      </div>
    </div>
  );
};

export default ImageModal;
