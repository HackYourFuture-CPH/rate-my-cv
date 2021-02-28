import { useState} from 'react';
import { storage } from '../firebase/configure';

const uploadFile = async (title, description, userId, fileUrl ) => {
  try {
    const postCv = await fetch('/api/cvs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        // eslint-disable-next-line @typescript-eslint/camelcase
        file_url: fileUrl,
        // eslint-disable-next-line @typescript-eslint/camelcase
        fk_user_id: userId,
      }),
    });
    if (!postCv.ok) {
      throw new Error(postCv.statusText);
      // directing to the #165 component (Hasn't merge yet)
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [uploadedFile, setUploadedFile] = useState('');
  

  const uploadToStorage = (file) => {
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
        const downloadedUrl = await storageRef.getDownloadURL();
        // save the url to local state
        setUrl(downloadedUrl);
      },
    );
  }

 return { progress, url, error, uploadedFile, setUploadedFile, uploadFile, uploadToStorage };
};


