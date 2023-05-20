import classes from './ErrorResult.module.css';

import { Button } from '../Button/Button.tsx';
import { Error } from '../icons/Error.tsx';

interface Props {
  message: string;
  changeAppState: () => void;
}

export const ErrorResult = ({ message, changeAppState }: Props) => {
  return (
    <div className={classes.error__container} draggable={false}>
      <div className={classes.header}>
        <Error className={classes.icon} />
        <h2 className={classes.title}>Upload Failed</h2>
      </div>
      <p className={classes.description}>Something went wrong, please try again</p>

      <code className={classes.code}>
        <span>Error:</span>
        <pre>{message}</pre>
      </code>
      <Button onClick={changeAppState}>Try AGAIN</Button>
    </div>
  );
};
