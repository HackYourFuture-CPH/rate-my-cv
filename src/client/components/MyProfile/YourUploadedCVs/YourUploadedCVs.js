import React from 'react';
import './yourUploadedCVs.css';
import { RatingStars } from '../../RatingStars/RatingStars';
import { CVList } from './CVList';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';

export function YourUploadedCVs({ CVsList }) {
  return (
    <section className="your-uploaded-cvs">
      <div className="header-your-uploaded-cv">
        <span>
          <h2>Your Uploaded CVs</h2>
        </span>
        <div className="upload-cv-botton">
          <Button
            buttonName="Upload new CV"
            style={{ backgroundColor: 'black' }}
          />
        </div>
      </div>
      {/* CVsList is an array comes as a resault of fetching API GET CVs  */}
      <ul>
        {CVsList.map((cv, i) => {
          return i < 3 ? (
            <li>
              <CVList title={cv.title} date={cv.created_date} />
              <RatingStars averageStars={(cv.averageStars * 100) / 5} />
              <div className="download">
                <Button
                  buttonName="Download"
                  style={{ backgroundColor: '#FFFFFF', color: '#f25b06' }}
                />
              </div>
              <div className="see-review">
                <Button
                  buttonName="See reviews"
                  style={{ backgroundColor: '#F25B06', color: '#FFFFFF' }}
                />
              </div>
            </li>
          ) : (
            ''
          );
        })}
      </ul>
    </section>
  );
}

YourUploadedCVs.propTypes = {
  CVsList: PropTypes.string.isRequired,
};
