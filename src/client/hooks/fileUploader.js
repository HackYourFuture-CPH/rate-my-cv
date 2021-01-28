import { useState, useEffect } from 'react';
import { storage } from '../firebase/configure';

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (file) {
      const storageRef = storage.ref(`/CVs/${file.name}`);
      storageRef.put(file).on(
        'state_changed',
        (snap) => {
          // upload progress
          const percentage = Math.round(
            (snap.bytesTransferred / snap.totalBytes) * 100,
          );
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const downloadUrl = await storageRef.getDownloadURL();
          // save the url to local state
          setUrl(downloadUrl);
        },
      );
    }
  }, [file]);

  return { progress, url, error };
};
