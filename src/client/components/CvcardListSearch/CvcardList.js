import React from 'react';
import PropTypes from 'prop-types';
// import './CvcardList.styles.css';
import { CardCvViewSearchComponent } from '../CardCvViewSearchComponent/CardCvViewSearchComponent';

export function CvcardList({ title }) {
  return (
    <div className="card-list">
      <h2>{title}</h2>
      <div>
        <CardCvViewSearchComponent
          profileImageUrl="woman"
          fullName="Marie"
          position="Manager"
          cvTitle="Administration Manager"
          fileUrl="https://www.w3schools.com"
          createdDate="new Date()"
        />
      </div>
    </div>
  );
}

CvcardList.propTypes = {
  title: PropTypes.string.isRequired,
};
