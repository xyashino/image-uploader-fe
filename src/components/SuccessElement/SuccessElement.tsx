import classes from './SuccessElement.module.css';
import { SuccessIcon } from '@icons/SuccessIcon.tsx';
import { SyntheticEvent } from 'react';
import { ImageUploadResponse } from '../../types/upload-image-response.ts';

type Props = ImageUploadResponse;

export const SuccessElement = ({ frontendImageUrl, backendImageUrl }: Props) => {
  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(frontendImageUrl);
  };

  return (
    <div className={classes.result__container} draggable={false}>
      <div className={classes.header}>
        <SuccessIcon className={classes.success} />
        <h2 className={classes.title}>Uploaded Successfully !</h2>
      </div>
      <img src={backendImageUrl} alt="uploaded image" className={classes.image} draggable={false} />
      <div className={classes.link_container}>
        <input type="text" defaultValue={frontendImageUrl} readOnly className={classes.input} />
        <button className={classes.button} onClick={handleClick}>
          Copy Clink
        </button>
      </div>
    </div>
  );
};
