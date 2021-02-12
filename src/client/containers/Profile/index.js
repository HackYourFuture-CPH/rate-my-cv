import React, { useEffect, useState } from 'react';
import { getUserFirebaseToken } from '../../firebase/auth';
import man from '../../assets/images/portraits/man1.jpg';
import './index.styles.css';
import { ProfileCardComponent } from '../../components/ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../../components/MyProfile/YourUploadedCVs/YourUploadedCVs';
import TitleCvCard from '../../components/MyProfile/TitleCvCard/TitleCvCard';

export default function Profile() {
  const [cvsList, setCvsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  // Here it needs the endpoint to get users' infor like github or  profile image url
  useEffect(() => {
    (async () => {
      const userFirebaseToken = await getUserFirebaseToken();
      if (userFirebaseToken) {
        console.log('firebase', userFirebaseToken);
      }
    })();
  },[]);
  // here we should get all cvs for the current use
  // will be passed to <YourUploadedCVs>
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/cv');
        if (response.status !== 200) {
          throw new Error('fail to connect to the Api');
        }
        const cvData = await response.json();
        setCvsList(cvData);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })();
  }, []);

  return (
    <div className="middle">
      <div className="left-part">
        {/* here is Profile Card - #12 */}
        <ProfileCardComponent
          profileImageUrl={man}
          fullName="Jonathan Andersen"
          position="Web developer"
          linkedin="arianavalentinamendez/"
          website="https://www.google.com/"
          github="valmdz"
        />{' '}
      </div>
      <div className="right-part">
        <div className="profile-description">
          {/* Profile Title and Description - #88 */}
          <TitleCvCard />
        </div>
        <div className="uploaded-cv">
          {/* Your uploaded CVs - #14 */}
          <YourUploadedCVs CVsList={cvsList} />{' '}
        </div>
        <div className="sent-reviews">
          {/* Sent Reviews - #92 */}</div>
      </div>
    </div>
  );
}
