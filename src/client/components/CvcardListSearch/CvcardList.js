import React from 'react';
import PropTypes from 'prop-types';
import './CvcardList.styles.css';
import { CardCvViewSearchComponent } from '../CardCvViewSearchComponent/CardCvViewSearchComponent';

export function CvcardList({ title, data }) {
  return (
    <div className="card-list">
      <h2>{title}</h2>
      <div className="cards">
        {data.map((card) => (
          <div>
            <CardCvViewSearchComponent
              profileImageUrl={card.profileImageUrl}
              fullName={card.fullName}
              position={card.position}
              cvTitle={card.cvTitle}
              fileUrl={card.fileUrl}
              createdDate={card.createdDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

CvcardList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
