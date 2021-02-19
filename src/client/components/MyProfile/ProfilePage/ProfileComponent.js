import React, { useEffect, useState } from 'react';
import './ProfileComponent.styles.css';
import { ProfileCardComponent } from '../../ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../YourUploadedCVs/YourUploadedCVs';
import TitleDesc from '../../Title/TitleDesc';

export default function ProfileComponent({ firebaseToken, setUserName }) {
  const [cvsList, setCvsList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userIdentified, setUserIdentified] = useState([]);
  // const userId = 6;
  useEffect(() => {
    if (firebaseToken) {
      (async () => {
        try {
          const response = await fetch('/api/users');
          if (response.status !== 200) {
            throw new Error('fail to connect to the Api');
          }
          const users = await response.json();
          const data = users.find(
            (user) => user.firebase_token === firebaseToken,
          );
          // userId
          // firebase_token === firebaseToken
          // data.linkedin = data.linkedin.substring(28);
          // data.github = data.github.substring(19);
          setUserName(data.full_name);
          setUserInfo(data);
          setUserIdentified(data.id);
        } catch (error) {
          setErrorMessage(error.message);
        }
      })();
    }
  }, [firebaseToken]);
  // here we are getting related cvs for the current user
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/cv');
        if (response.status !== 200) {
          throw new Error('fail to connect to the Api');
        }
        const cvs = await response.json();
        const userCvs = cvs.filter((cv) => cv.fk_user_id === userInfo.id);
        setCvsList(userCvs);
      } catch (error) {
        setErrorMessage(error.message);
      }
    })();
  }, [userIdentified]);

  return (
    <div className="middle">
      <div className="left-part">
        {/* here is Profile Card - #12
         */}
        <ProfileCardComponent
          profileImageUrl={userInfo.profile_image_url}
          fullName={userInfo.full_name}
          position={userInfo.position}
          linkedin={userInfo.linkedin}
          website={userInfo.website}
          github={userInfo.github}
        />
      </div>
      <div className="right-part">
        <div className="profile-description">
          {/* Profile Title and Description - #88 */}
          <TitleDesc
            title="Your profile"
            description="A resume summary or career proﬁle is a brief statement at the top of your resume. If you are a career changer or have many years of experience, craft a powerful summary to highlight your accomplishments and skills.  Show the employer, at a glance, why you’re qualiﬁed for the job!"
          />
        </div>
        {/* Your uploaded CVs - #14 */}
        <div className="uploaded-cv">
          <YourUploadedCVs CVsList={cvsList} />{' '}
        </div>
        <div className="sent-reviews">
          {/* Sent Reviews - #92 */}
          Sent Reviews (on the way) - #92
        </div>
      </div>
    </div>
  );
}
