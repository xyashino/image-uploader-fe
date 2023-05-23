import classes from './PicturePage.module.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { SyntheticEvent } from 'react';
import { PageRouter } from '@enums/page-router.enum.ts';
import { ImageResponse } from '../../types/image-response.ts';

const API_URL = import.meta.env.VITE_API_URL;

export const PicturePage = () => {
  const data = useLoaderData() as ImageResponse;
  const navigate = useNavigate();
  const imageUrl = `${API_URL}${data.filePath}`;

  const handleButtonClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch(`${API_URL}/image/${data.id}`, {
      method: 'DELETE',
    });
    navigate(PageRouter.Home);
  };

  return (
    <div className={classes.picture_page}>
      <div className={classes.picture_page__wrapper}>
        <img src={imageUrl} alt="Saved Image" className={classes.picture_page__image} />
      </div>
      <div className={classes.picture_page__buttons}>
        <a href={imageUrl} download className={classes.button} target="_blank" rel="noreferrer">
          Download
        </a>
        <button className={classes.button} onClick={handleButtonClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
