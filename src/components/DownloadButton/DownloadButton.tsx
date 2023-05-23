import { HTMLAttributes, PropsWithChildren, useEffect, useState } from 'react';

interface Props extends PropsWithChildren, Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  fileUrl: string;
  fileName: string;
}

const DownloadButton = ({ fileUrl, fileName, children, ...rest }: Props) => {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        setDataUrl(url);
      });
  }, [fileUrl]);

  const handleDownload = () => {
    const link = document.createElement('a');
    if (typeof dataUrl === 'string') link.href = dataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} disabled={!dataUrl} {...rest}>
      {children}
    </button>
  );
};

export default DownloadButton;
