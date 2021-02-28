import { useAuthentication } from '../../../hooks/useAuthentication';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProfileComponent.styles.css';
import { ProfileCardComponent } from '../../ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../YourUploadedCVs/YourUploadedCVs';
import TitleDesc from '../../Title/TitleDesc';
import { SentReviewsComponent } from '../../SentReviewsComponent/SentReviewsComponent.js';
import man from '../../../assets/images/portraits/man2.jpg';
import woman from '../../../assets/images/portraits/woman3.jpg';
import womanTwo from '../../../assets/images/portraits/woman1.jpg';

export default function ProfileComponent() {
  const { userData } = useAuthentication();
  const history = useHistory();
  const [cvsList, setCvsList] = useState([]);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdDate: new Date(),
      reviewer: {
        fullName: 'Ghofrane Ben Hmaid',
        profileImageUrl: man,
      },
      cv: {
        fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
        averageStars: 4,
        createdDate: new Date(),
        author: {
          fullName: 'Stephanie Hicks',
          profileImageUrl: woman,
        },
      },
    },
  
    {
      id: 2,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdDate: new Date(),
      reviewer: {
        fullName: 'Ghofrane Ben Hmaid',
        profileImageUrl: man,
      },
      cv: {
        fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
        averageStars: 4,
        createdDate: new Date(),
        author: {
          fullName: 'Stephanie Mendrala',
          profileImageUrl: womanTwo,
        },
      },
    },
  
    {
      id: 3,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdDate: new Date(),
      reviewer: {
        fullName: 'Ghofrane Ben Hmaid',
        profileImageUrl: man,
      },
      cv: {
        fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
        averageStars: 4,
        createdDate: new Date(),
        author: {
          fullName: 'Valentina Méndez',
          profileImageUrl: '',
        },
      },
    },
  ]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);
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
          if (userCvs) {
            setCvsList(() =>
              userCvs
                .filter((cv) => cv.fk_user_id === userData.id)
                .map((cv) => {
                  return { ...cv, createdDate: cv.createdAt };
                }),
            );
          }
          // const responseRew = await fetch(`api/reviews/${userData.id}`);
          // if (responseRew.status !== 200) {
          //   throw new Error('fail to connect to the api/reviews');
          // }
          // const reviewsCv = await responseRew.json();
          // setReviewsLoaded(true);
          // if (reviewsCv) {
          //   setReviews(reviewsCv);
          // }
        } catch (error) {
          // if data not found in api/usercv
          history.push('/sign-in');
          throw new Error('Data not found');
        }
      })();
    }
  }, [setCvsList, history, isLoaded, userData, reviewsLoaded, setReviews]);

  return (
    <div className="middle-part">
      <div className="left-part">
        {userData.length !== 0 && <ProfileCardComponent />}
      </div>
      <div className="right-part">
        <div className="profile-description">
          <TitleDesc
            title="Your profile"
            description="A resume summary or career proﬁle is a brief statement at the top of your resume. If you are a career changer or have many years of experience, craft a powerful summary to highlight your accomplishments and skills.  Show the employer, at a glance, why you’re qualiﬁed for the job!"
          />
        </div>
        <div className="uploaded-cv">
          {cvsList.length !== 0 && <YourUploadedCVs CVsList={cvsList} />}
        </div>
        <div className="sent-reviews">
          {reviews.length !== 0 && <SentReviewsComponent reviews={reviews} />}
        </div>
      </div>
    </div>
  );
}
