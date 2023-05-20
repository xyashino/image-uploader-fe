import classes from './DragAndDrop.module.css';
import image from '../../assets/image.svg';
import { useState, DragEvent } from 'react';

interface Props {
  addImage: (e: File) => void;
}

export const DragAndDrop = ({ addImage }: Props) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (!e.dataTransfer) return;
    addImage(e.dataTransfer.files[0]);
  };

  const containerClasses = [classes.container, isDragOver ? classes.container__drag : ''].join(' ');

  return (
    <div
      className={`${containerClasses}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      draggable={false}
    >
      <img src={image} alt="drag and drop" draggable={false} />
      <p className={classes.container__text}>Drag & Drop your image here</p>
    </div>
  );
};
