import React from 'react';
import ProfileComponent from '../../components/MyProfile/ProfilePage/ProfileComponent';
import './index.styles.css'

export default function Profile({ firebaseToken, setUserName }) {
  return (
    <div className='main-part'>
      <ProfileComponent
        firebaseToken={firebaseToken}
        setUserName={setUserName}
      />
      </div>
  );
}
