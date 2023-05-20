import classes from './SuccessResult.module.css';
import { Success } from '../icons/Success.tsx';
import { SyntheticEvent } from 'react';

interface Props {
  imageUrl: string;
}

export const SuccessResult = ({ imageUrl }: Props) => {
  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(imageUrl);
  };

  return (
    <div className={classes.result__container} draggable={false}>
      <div className={classes.header}>
        <Success className={classes.success} />
        <h2 className={classes.title}>Uploaded Successfully !</h2>
      </div>
      <img src={imageUrl} alt="uploaded image" className={classes.image} draggable={false} />
      <div className={classes.link_container}>
        <input type="text" defaultValue={imageUrl} readOnly className={classes.input} />
        <button className={classes.button} onClick={handleClick}>
          Copy Clink
        </button>
      </div>
    </div>
  );
};
