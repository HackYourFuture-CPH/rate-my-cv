/* eslint-disable camelcase */
import { useAuthentication } from '../../../hooks/useAuthentication';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProfileComponent.styles.css';
import { ProfileCardComponent } from '../../ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../YourUploadedCVs/YourUploadedCVs';
import TitleDesc from '../../Title/TitleDesc';
import { SentReviewsComponent } from '../../SentReviewsComponent/SentReviewsComponent.js';

export default function ProfileComponent() {
  const { userData } = useAuthentication();
  const history = useHistory();
  const [cvsList, setCvsList] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const[reviewsLoaded,setReviewsLoaded]=useState
  useEffect(() => {
    if (userData) {
      (async () => {
        try {
          const response = await fetch('/api/cvs');
          if (response.status !== 200) {
            throw new Error('fail to connect to the api/cvs');
          }
          const userCvs = await response.json();
          setIsLoaded(true);
          setCvsList(() =>
            userCvs
              .filter((cv) => cv.fk_user_id === userData.id)
              .map((cv) => {
                return { ...cv, createdDate: cv.createdAt };
              }),
          );
          const responseRew = await fetch(`api/reviews/${userData.id}`);
          if(responseRew.status!==200){
            throw new Error('fail to connect to the api/reviews');
          }
          const reviewCvs= await responseRew.json();

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
        {userData && (
          <ProfileCardComponent
            profileImageUrl={userData?.profile_image_url}
            fullName={userData?.full_name}
            position={userData?.position}
            linkedin={userData?.linkedin}
            website={userData?.website}
            github={userData?.github}
          />
        )}
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
          {cvsList && <YourUploadedCVs CVsList={cvsList} />}
        </div>
        <div className="sent-reviews">
          {/* Sent Reviews - #92 */}
          {reviews && <SentReviewsComponent review={reviews} />}
        </div>
      </div>
    </div>
  );
}
