import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren, Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  fileUrl: string;
}

const DownloadButton = ({ fileUrl, children, ...rest }: Props) => {
  const handleDownload = () => {
    fetch(fileUrl, {
      mode: 'no-cors',
    })
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = fileUrl.replace(/^.*[\\\/]/, '');
        a.href = blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };

  return (
    <button onClick={handleDownload} {...rest}>
      {children}
    </button>
  );
};

export default DownloadButton;
