import React, { useState } from 'react';
import './YourUploadedCVs.css';
import { RatingStars } from '../../RatingStars/RatingStars';
import { CVList } from './CVList';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';
import { AddResume } from '../../AddResume/AddResume';

export function YourUploadedCVs({ CVsList, setIsLoaded }) {
  const [isShown, setIsShown] = useState(false);

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
            onClick={() => setIsShown(true)}
          />
          <AddResume
            isShown={isShown}
            setIsShown={setIsShown}
            setIsLoaded={setIsLoaded}
          />
        </div>
      </div>
      <ul>
        {CVsList.map((cv, i) => {
          return i < 3 ? (
            <li key={cv.id}>
              <CVList title={cv.title} date={cv.createdDate.toLocaleString()} />
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

const Cvs = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  averageStars: PropTypes.number.isRequired,
});

YourUploadedCVs.propTypes = {
  CVsList: PropTypes.arrayOf(Cvs).isRequired,
  setIsLoaded: PropTypes.func.isRequired,
};
