import { Dispatch, SetStateAction } from 'react';
import { AppStatus } from '../../types/app-status.ts';

const APP_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

export const setAndFilterFile = (e: File, setImage: Dispatch<SetStateAction<File | null>>) => {
  if (!allowedTypes.includes(e.type) && e.size > 1000 * 1000 * 10) return;
  setImage(e);
};

export const uploadImage = async (
  image: File,
  setError: Dispatch<SetStateAction<string | null>>,
  setAppStatus: Dispatch<SetStateAction<AppStatus>>,
): Promise<string | void> => {
  setError(null);
  setAppStatus('loading');

  const formData = new FormData();
  formData.append('image', image);

  const res = await fetch(`${APP_URL}/upload/image`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    setError(data.message || 'An unexpected error occurred');
    setAppStatus('error');
    return;
  }

  setAppStatus('success');
  return data.fileUrl as string;
};
