import React from 'react';
import man from '../../assets/images/portraits/man1.jpg';
import './index.styles.css';

import { ProfileCardComponent } from '../../components/ProfileCardComponent/ProfileCardComponent';
import { YourUploadedCVs } from '../../components/MyProfile/YourUploadedCVs/YourUploadedCVs';
import TitleCvCard from '../../components/Title/TitleCvCard/TitleCvCard';

export default function Profile() {
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
          <YourUploadedCVs
            CVsList={[
              {
                id: 3,
                title: 'Mechanical Engineer',
                created_date: '2020-10-20',
                averageStars: 4.5,
              },
              {
                id: 5,
                title: 'Technical Auditor',
                created_date: '2021-01-21',
                averageStars: 3.4,
              },
              {
                id: 9,
                title: 'ghofranebenhamid-vc-v3',
                created_date: '2021-03-21',
                averageStars: 4,
              },
              {
                id: 10,
                title: 'React Programmer',
                created_date: '2021-03-25',
                averageStars: 2.4,
              },
            ]}
          />{' '}
        </div>
        <div className="sent-reviews">
          {/*                           Sent Reviews - #92 */}
        </div>
      </div>
    </div>
  );
}
