import classes from './UploadContainer.module.css';
import { Button } from '@components/Button/Button.tsx';
import { ChangeEvent, SyntheticEvent, useRef } from 'react';
import { DragAndDrop } from '@components/DragAndDrop/DragAndDrop.tsx';

interface Props {
  addImage: (e: File) => void;
}
export const UploadContainer = ({ addImage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const chooseFile = (e: SyntheticEvent) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles || !selectedFiles[0]) return;
    addImage(selectedFiles[0]);
  };

  return (
    <div className={classes.upload__container}>
      <h1 className={classes.upload__container__title}>Upload your Image</h1>
      <h3 className={classes.upload__container__description}>File should be Jpeg,Png ... </h3>
      <DragAndDrop addImage={addImage} />
      <p className={classes.upload__container__text}>OR</p>
      <Button onClick={chooseFile}>Choose</Button>
      <input type="file" className={classes.hide} ref={inputRef} accept="image/*" onChange={handleImageChange} />
    </div>
  );
};
