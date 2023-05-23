import { useLayoutEffect, useState } from 'react';
import { sendImageToServer, validateAndSetImage } from '@pages/Home/HomePage.helper.ts';
import { SuccessElement } from '@components/SuccessElement/SuccessElement.tsx';
import { Loading } from '@components/Loading/Loading.tsx';
import { FileUploadComponent } from '@components/FileUploadComponent/FileUploadComponent.tsx';
import { AnimatedCard } from '@components/AnimatedCard/AnimatedCard.tsx';
import { ErrorElement } from '@components/ErrorElement/ErrorElement.tsx';
import { AppStatus } from '../../types/app-status.ts';
import { ImageUploadResponse } from '../../types/upload-image-response.ts';

export const HomePage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<AppStatus>('loading');
  const [error, setError] = useState<string | undefined>();
  const [urls, setUrls] = useState<ImageUploadResponse>({ frontendImageUrl: '', backendImageUrl: '' });

  useLayoutEffect(() => {
    (async () => {
      if (!image) return;
      const data = await sendImageToServer(image, setError, setStatus);
      if (data) setUrls({ ...data });
    })();
  }, [image]);

  const addImage = (image: File) => validateAndSetImage(image, setImage);
  const handleGoToMain = () => setStatus('upload');

  return (
    <AnimatedCard appState={status}>
      {status === 'loading' && <Loading />}
      {status === 'error' && (
        <ErrorElement
          detailedErrorMessage={error}
          navigateToMain={handleGoToMain}
          errorHeading="Uploading Failed"
          withoutCardStyle
        />
      )}
      {status === 'success' && (
        <SuccessElement backendImageUrl={urls.backendImageUrl} frontendImageUrl={urls.frontendImageUrl} />
      )}
      {status === 'upload' && <FileUploadComponent addImage={addImage} />}
    </AnimatedCard>
  );
};
