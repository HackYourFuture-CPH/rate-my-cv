import React from 'react';
import man from '../../assets/images/portraits/man1.jpg';

import Header from '../../components/Navigation/Header';
import { ProfileCardComponent } from '../../components/ProfileCardComponent/ProfileCardComponent';
import { CVList } from '../../components/MyProfile/YourUploadedCVs/CVList';
import { YourUploadedCVs } from '../../components/MyProfile/YourUploadedCVs/YourUploadedCVs';

export default function Profile() {
  return (
    <div className="whole-page">
      <div className="top">
        {/*                                 Header - #31 */}
        <Header isAuthenticated={true} username="William Henry Gates" />
      </div>
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
          </div>
          <div className="uploaded-cv">
            {/*                         Your uploaded CVs - #14 */}
          </div>
          <div className="sent-reviews">
            {/*                           Sent Reviews - #92 */}
          </div>
        </div>
      </div>
      <div className="down">{/*                    Footer - #33 */}</div>
    </div>
  );
}
