import React from 'react';
import ProfileComponent from '../../components/MyProfile/ProfilePage/ProfileComponent';

export default function Profile({setUserName}) {
  return (
    <div>
      <ProfileComponent setUserName={setUserName}/>
    </div>
  );
}
