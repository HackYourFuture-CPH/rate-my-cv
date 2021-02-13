import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import './index.styles.css';
import { ProfileCardComponent } from '../../components/ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../../components/MyProfile/YourUploadedCVs/YourUploadedCVs';
import TitleCvCard from '../../components/MyProfile/TitleCvCard/TitleCvCard';

export default function Profile() {
  const [cvsList, setCvsList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const userId = 2;
  // const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/users`);
        if (response.status !== 200) {
          throw new Error('fail to connect to the Api');
        }
        const users = await response.json();
        const data = users.find((user) => user.id === userId);
        setUserData(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })();
  }, []);
  // here we are getting related cvs for the current use
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/cv`);
        if (response.status !== 200) {
          throw new Error('fail to connect to the Api');
        }
        const cvs = await response.json();
        const userCvs = cvs.filter((cv) => cv.fk_user_id === userId);
        setCvsList(userCvs);
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
          profileImageUrl={userData.rofile_image_url}
          fullName={userData.full_name}
          position={userData.position}
          linkedin={userData.linkedin}
          website={userData.website}
          github={userData.github}
        />
      </div>
      <div className="right-part">
        <div className="profile-description">
          {/* Profile Title and Description - #88 */}
          <TitleCvCard />
        </div>
        {/* Your uploaded CVs - #14 */}
        <div className="uploaded-cv">
          <YourUploadedCVs CVsList={cvsList} />{' '}
        </div>
        <div className="sent-reviews">{/* Sent Reviews - #92 */}</div>
      </div>
    </div>
  );
}
