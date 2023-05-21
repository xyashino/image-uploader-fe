import classes from './NotFoundPage.module.css';
import { Button } from '@components/Button/Button.tsx';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageRouter } from '@enums/page-router.enum.ts';
export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(PageRouter.Home);
  };
  return (
    <div className={classes.container}>
      <div className={classes.text_wrapper}>
        <h1 className={classes.title}>404</h1>
        <p className={classes.text}>Page Not Found</p>
      </div>
      <Button onClick={handleNavigate}>Home Page</Button>
    </div>
  );
};
