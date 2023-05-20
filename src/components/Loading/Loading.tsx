import classes from './Loading.module.css';
export const Loading = () => {
  return (
    <div className={classes.loading}>
      <h3>Uploading ... </h3>
      <div className={classes.progress} />
    </div>
  );
};
