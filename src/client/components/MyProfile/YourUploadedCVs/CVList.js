import React from 'react';
import './YourUploadedCVs.css';
import PropTypes from 'prop-types';

export function CVList({ title, date }) {
  return (
    <div className="title-holder-your-cv-uploader">
      <div className="cv-title">{title}</div>
      <div className="cv-date">{date}</div>
    </div>
  );
}

CVList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
