import classes from "./Button.module.css";
import {HTMLAttributes, PropsWithChildren} from "react";

interface Props extends PropsWithChildren , Omit<HTMLAttributes<HTMLButtonElement>, 'className'>{}

export const Button = ({children, ...rest}:Props) => {
  return <button className={classes.button} {...rest}>
    {children}
  </button>
}