import React from 'react';
import PropTypes from 'prop-types';
import './CvcardList.styles.css';
import { CardCvViewSearchComponent } from '../CardCvViewSearchComponent/CardCvViewSearchComponent';

export function CvcardList({ cvs }) {
  return (
    <div className="usercv-list">
      <h2> Latest Uploaded Resumes</h2>
      <div className="usercvs">
        {cvs.slice(-3).map((cv) => (
          <div>
            <CardCvViewSearchComponent
              profileImageUrl={cv.profile_image_url}
              fullName={cv.full_name}
              position={cv.position}
              cvTitle={cv.title}
              fileUrl={cv.file_url}
              createdDate={cv.created_date.toLocaleString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

CvcardList.propTypes = {
  cvs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
