import React from 'react';
import PropTypes from 'prop-types';
import './TitleDesc.styles.css';

const TitleDesc = ({ title, description }) => {
  return (           
    <div className="title-desc-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

TitleDesc.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TitleDesc;
