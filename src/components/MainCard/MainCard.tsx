import { useLayoutEffect, useState } from 'react';
import { UploadContainer } from '@components/UploadContainer/UploadContainer.tsx';
import { Loading } from '@components/Loading/Loading.tsx';
import { SuccessResult } from '@components/SuccessResult/SuccessResult.tsx';
import { setAndFilterFile, uploadImage } from './MainCard.helper.ts';
import { ErrorResult } from '@components/ErrorResult/ErrorResult.tsx';
import { MotionCard } from '@components/MotionCard/MotionCard.tsx';
import { AppStatus } from '../../types/app-status.ts';

export const MainCard = () => {
  const [appState, setAppState] = useState<AppStatus>('init');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (!image) return;
    (async () => {
      const url = await uploadImage(image, setError, setAppState);
      if (!url) return;
      setImageUrl(url);
    })();
  }, [image]);

  const changeInitAppState = () => setAppState('init');
  const addImage = (image: File) => setAndFilterFile(image, setImage);

  return (
    <MotionCard appState={appState}>
      {appState === 'init' && <UploadContainer addImage={addImage} />}
      {appState === 'loading' && <Loading />}
      {appState === 'success' && imageUrl && <SuccessResult imageUrl={imageUrl} />}
      {appState === 'error' && error && <ErrorResult message={error} changeAppState={changeInitAppState} />}
    </MotionCard>
  );
};
