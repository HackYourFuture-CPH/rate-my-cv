import React from 'react';
import './YourUploadedCVs.css';
import { RatingStars } from './RatingStars';
import { CVList } from './CVList';
import Button from '../../Button/Button';

export function YourUploadedCVs({ CVsList }) {
  return (
    <section className="YourUploadedCVs">
      <div className="header-yourUploadedCV">
        <span>
          <h2>Your Uploaded CVs</h2>
        </span>
        <div className="uploadCVBtn">
          <Button buttonName="Upload new CV" backgroundColor="black" />
        </div>
      </div>{' '}
      {/* CVsList is an array comes as a resault of fetching API GET CVs  */}
      <div className="CVlistHolder">
        {CVsList.map((cv, i) => {
          return i < 3 ? (
            <ul key={cv.id}>
              <CVList title={cv.title} date={cv.created_date} />
              <RatingStars averageStars={(cv.averageStars * 100) / 5} />
              {/* COMMENT 1: averageStars comes form as a resault of fetching on API PUT AVG on the stars in the table  */}
              {/* review WHERE the id=cv.id to table CV */}
              {/* COMMENT 2: averageStars should be a number between 0 to 5 */}
              <div className="download">
                <Button buttonName="Download" backgroundColor="#FFFFFF" />
              </div>
              <div className="seeReview">
                <Button buttonName="See reviews" backgroundColor="#F25B06" />
              </div>
            </ul>
          ) : (
            ''
          );
        })}
      </div>
    </section>
  );
}
