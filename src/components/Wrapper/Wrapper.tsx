import { PropsWithChildren } from 'react';
import classes from './Wrapper.module.css';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className={classes.wrapper}>{children}</div>;
};
