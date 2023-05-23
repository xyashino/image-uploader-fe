import classes from './ErrorElement.module.css';
import { ErrorIcon } from '@icons/ErrorIcon.tsx';
import { useNavigate, useRouteError } from 'react-router-dom';
import { SyntheticEvent } from 'react';
import { Button } from '@components/Button/Button.tsx';
import { PageRouter } from '@enums/page-router.enum.ts';

interface Props {
  detailedErrorMessage?: string;
  errorHeading?: string;
  navigateToMain?: () => void;
  withoutCardStyle?: boolean;
}

export const ErrorElement = ({
  errorHeading = 'Error',
  detailedErrorMessage,
  navigateToMain,
  withoutCardStyle = false,
}: Props) => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  const handleNavigateToMain = (e: SyntheticEvent) => {
    e.preventDefault();
    if (navigateToMain) return navigateToMain();
    navigate(PageRouter.Home);
  };

  return (
    <div className={`${withoutCardStyle ? classes.errorContainer : classes.errorContainerCard}`} draggable={false}>
      <div className={classes.header}>
        <ErrorIcon className={classes.icon} />
        <h2 className={classes.title}>{errorHeading}</h2>
      </div>

      <p className={classes.description}>Something went wrong, please try again</p>

      <code className={classes.code}>
        <span>Error:</span>
        <pre>{detailedErrorMessage ?? error?.message ?? 'Unknown'}</pre>
      </code>

      <Button onClick={handleNavigateToMain}>Go To Main</Button>
    </div>
  );
};
