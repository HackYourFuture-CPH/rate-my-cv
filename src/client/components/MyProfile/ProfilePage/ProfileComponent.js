import React, { useEffect, useState } from 'react';
import './ProfileComponent.styles.css';
import { ProfileCardComponent } from '../../ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../YourUploadedCVs/YourUploadedCVs';
import TitleDesc from '../../Title/TitleDesc';

export default function ProfileComponent({ firebaseToken, setUserName }) {
  const [cvsList, setCvsList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (firebaseToken && !isLoaded) {
      (async () => {
        try {
          const response = await fetch('/api/usercv');
          if (response.status !== 200) {
            throw new Error('fail to connect to the Api');
          }
          const allData = await response.json();
          const userCvs = allData.filter(
            (user) => user.firebase_token === firebaseToken,
          );
          setIsLoaded(true);
          setCvsList(userCvs);
          const dataUser = userCvs.find(
            (user) => user.firebase_token === firebaseToken,
          );
          setUserInfo(dataUser);
          setUserName(dataUser.full_name);
        } catch (error) {
          throw new Error('No found data in Api');
        }
      })();
    }
  }, [firebaseToken, isLoaded, setUserName]);

  return (
    <div className="middle-part">
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
          Instance of Sent Reviews #92
        </div>
        <div className="sent-reviews">
          {/* Sent Reviews - #92 */}
          Instance of Sent Reviews #92
        </div>
        <div className="sent-reviews">
          {/* Sent Reviews - #92 */}
          Instance of Sent Reviews #92
        </div>
      </div>
    </div>
  );
}
