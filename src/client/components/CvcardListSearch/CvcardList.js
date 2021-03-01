import React from 'react';
import PropTypes from 'prop-types';
import './CvcardList.styles.css';
import { CardCvViewSearchComponent } from '../CardCvViewSearchComponent/CardCvViewSearchComponent';

export function CvcardList({ title, cvs }) {
  return (
    <div className="usercv-list">
      <h2>{title} </h2>
      <div className="usercvs">
        {cvs.map((cv) => (
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
  title: PropTypes.string.isRequired,
  cvs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
