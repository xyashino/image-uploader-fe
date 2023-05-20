import { HTMLAttributes, PropsWithChildren, MouseEvent } from 'react';
import classes from './Button.module.css';

interface Props extends PropsWithChildren, Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick, ...rest }: Props) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick && onClick(event);
    if (event.target instanceof HTMLButtonElement) event.target.blur();
  };
  return (
    <button className={classes.button} {...rest} onClick={handleClick}>
      {children}
    </button>
  );
};
