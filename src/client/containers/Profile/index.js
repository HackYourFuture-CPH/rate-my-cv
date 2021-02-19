import React from 'react';
import ProfileComponent from '../../components/MyProfile/ProfilePage/ProfileComponent';

export default function Profile({ firebaseToken, setUserName }) {
  return (
    <div>
      <ProfileComponent
        firebaseToken={firebaseToken}
        setUserName={setUserName}
      />
    </div>
  );
}
