const APP_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
export const getData = async (path: string, options?: RequestInit) => {
  const res = await fetch(`${APP_URL}/${path}`, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'An unexpected error occurred');
  return data;
};
