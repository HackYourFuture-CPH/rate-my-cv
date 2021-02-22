import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';
import { useAuthentication } from '../../hooks/useAuthentication';

export default function PostUrlComponent({ uploadedFile, title, description }) {
  const { userData } = useAuthentication();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (userData) {
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
              fk_user_id: userData.id,
            }),
          });
          setIsLoading(false);
          if (!postCv.ok) {
            throw new Error(postCv.statusText);
            // directing to the #165 component (Hasn't merge yet)
          } else {
            history.push('/profile');
          }
        } catch (error) {
          throw new Error(error);
        }
      })();
    }
  }, [description, history, title, uploadedFile, userData]);

  return isLoading ? <Loader /> : '';
}

PostUrlComponent.propTypes = {
  uploadedFile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
