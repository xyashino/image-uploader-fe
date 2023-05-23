import { Dispatch, SetStateAction } from 'react';
import { AppStatus } from '../../types/app-status.ts';
import { ImageUploadResponse } from '../../types/upload-image-response.ts';

const APP_URL = import.meta.env.VITE_APP_URL;
const API_URL = import.meta.env.VITE_API_URL;

export const validateAndSetImage = (file: File, setImage: Dispatch<SetStateAction<File | null>>) => {
  const MAX_FILE_SIZE = 1000 * 1000 * 10; // 10MB
  if (file.size > MAX_FILE_SIZE) return;
  setImage(file);
};

export const sendImageToServer = async (
  image: File,
  setError: Dispatch<SetStateAction<string | undefined>>,
  updateAppStatus: Dispatch<SetStateAction<AppStatus>>,
): Promise<ImageUploadResponse | void> => {
  setError(undefined);
  updateAppStatus('loading');

  const formData = new FormData();
  formData.append('image', image);

  const res = await fetch(`${API_URL}/upload/image`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) {
    setError(data.message || 'An unexpected error occurred');
    updateAppStatus('error');
    return;
  }
  updateAppStatus('success');
  return { frontendImageUrl: `${APP_URL}/image/${data.id}`, backendImageUrl: `${API_URL}${data.filePath}` };
};
