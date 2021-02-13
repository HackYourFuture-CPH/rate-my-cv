import React from 'react';
import { useStorage } from '../../hooks/fileUploader';

export function CVreviews({ uploadedFile }) {
  const { url } = useStorage(uploadedFile);

  return (
    <iframe
      title={url}
      style={{ width: '50%', height: '700px' }}
      scrolling="yes"
      src={`${url} #toolbar=0`}
      allowTransparency="true"
      allowFullScreen={true}
      frameBorder="no"
    />
  );
}
