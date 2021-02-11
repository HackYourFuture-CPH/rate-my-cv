import React, { useEffect, useState } from 'react';
import man from '../../assets/images/portraits/man1.jpg';
import './index.styles.css';

import { ProfileCardComponent } from '../../components/ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../../components/MyProfile/YourUploadedCVs/YourUploadedCVs';
import TitleCvCard from '../../components/MyProfile/TitleCvCard/TitleCvCard';

export default function Profile() {
  const [cvsList, setCvsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(cvsList);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/cv');
        if (result.status !== 200) {
          console.log(result.status);
          throw new Error('fail to connect to the Api');
        }
        const data = await response.json();
        console.log('CVslist', CvsList);
        setCvsList(data);
      } catch (error) {
        setErrorMessage((prev) => error.message);
      }
    })();
  }, []);
  return (
    <div className="middle">
      <div className="Left-part">
        {/*                         Profile Card - #12 */}
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
          {/*                       Profile Title and Description - #88 */}
          {/* TitleDesc = ({title,description}) */}
          {/* <TitleDesc
              title="Your profile"
              description="Here is the description"
            /> */}
          <TitleCvCard />
        </div>
        <div className="uploaded-cv">
          {/*                         Your uploaded CVs - #14 */}
          {/* function YourUploadedCVs({ CVsList }) { */}
          <YourUploadedCVs CVsList={cvsList} />{' '}
        </div>
        <div className="sent-reviews">
          {/*                           Sent Reviews - #92 */}
        </div>
      </div>
    </div>
  );
}
