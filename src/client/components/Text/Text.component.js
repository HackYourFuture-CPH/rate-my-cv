import React from 'react';
import PropTypes from 'prop-types';
import './Text.styles.css';

export default function Text({ header,description }) {
  return (
    <div >
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  );
}

Text.propTypes = {
    header: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
};
