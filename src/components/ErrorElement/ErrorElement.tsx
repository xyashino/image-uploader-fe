import classes from './ErrorElement.module.css';

import { Button } from '@components/Button/Button.tsx';
import { Error } from '@icons/Error.tsx';
import { useNavigate, useRouteError } from 'react-router-dom';
import { SyntheticEvent } from 'react';
import { PageRouter } from '@enums/page-router.enum.ts';

interface Props {
  errorMessage?: string;
}

export const ErrorElement = ({ errorMessage = 'Error' }: Props) => {
  const { message } = useRouteError() as Error;
  const navigate = useNavigate();

  const handleGoToMain = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(PageRouter.Home);
  };

  return (
    <div className={classes.error__container} draggable={false}>
      <div className={classes.header}>
        <Error className={classes.icon} />
        <h2 className={classes.title}>{errorMessage}</h2>
      </div>
      <p className={classes.description}>Something went wrong, please try again</p>

      <code className={classes.code}>
        <span>Error:</span>
        <pre>{message ?? 'Unkown'}</pre>
      </code>
      <Button onClick={handleGoToMain}>Go To Main</Button>
    </div>
  );
};
