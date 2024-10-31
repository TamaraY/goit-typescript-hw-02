import React from "react";
import { Image } from "../App/App.types";

interface ImageCardProps {
  image: Image;
  onImageClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div onClick={onImageClick}>
      <img src={image.url} alt={image.title} />
    </div>
  );
};

export default ImageCard;
