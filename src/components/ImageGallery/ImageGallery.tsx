import React from "react";
import styles from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <div
          key={image.id}
          className={styles.imageWrapper}
          onClick={() => onImageClick(image)}
        >
          <img src={image.url} alt={image.title} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
