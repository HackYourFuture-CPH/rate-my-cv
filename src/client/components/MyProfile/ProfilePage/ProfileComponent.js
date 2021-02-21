import { useAuthentication } from '../../../hooks/useAuthentication';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProfileComponent.styles.css';
import { ProfileCardComponent } from '../../ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../YourUploadedCVs/YourUploadedCVs';
import TitleDesc from '../../Title/TitleDesc';

export default function ProfileComponent() {
  const { userData } = useAuthentication();
  const history = useHistory();
  const [cvsList, setCvsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (userData) {
      (async () => {
        try {
          const response = await fetch('/api/usercv');
          if (response.status !== 200) {
            throw new Error('fail to connect to the Api');
          }
          const userCvs = await response.json();
          setIsLoaded(true);
          setCvsList(() =>
            userCvs.filter((cv) => cv.fk_user_id === userData.id),
          );
        } catch (error) {
          // if data not found in api/usercv
          history.push('/sign-in');
          throw new Error('Data not found');
        }
      })();
    }
  }, [setCvsList, history, isLoaded, userData]);

  return (
    <div className="middle-part">
      <div className="left-part">
        {/* here is Profile Card - #12
         */}
        <ProfileCardComponent
          profileImageUrl={userData.profile_image_url}
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
