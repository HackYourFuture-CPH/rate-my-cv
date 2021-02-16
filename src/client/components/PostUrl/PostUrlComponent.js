import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';

export default function PostUrlComponent({
  uploadedFile,
  title,
  description,
  firebaseToken,
}) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fetchUserId, setFetchUserId] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch('/api/users');
        if (response.status !== 200) {
          throw new Error('fail to connect to the Api');
        }
        const users = await response.json();
        setIsLoading(false);
        const currentUser = users.find(
          (user) => user.firebase_token === firebaseToken,
        );
        setFetchUserId(currentUser.id);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })();
  }, [uploadedFile]);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const postCv = await fetch('/api/cvs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            description,
            file_url: uploadedFile,
            fk_user_id: fetchUserId,
          }),
        });
        setIsLoading(false);
        if (!postCv.ok) {
          // error would be sent conresponding component story #165
          setErrorMessage(postCv.statusText);
          throw new Error(postCv.statusText);
        } else {
          history.push('/sign-in');
        }
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [fetchUserId]);

  return isLoading ? <Loader /> : '';
}

PostUrlComponent.propTypes = {
  uploadedFile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firebaseToken: PropTypes.string.isRequired,
};
