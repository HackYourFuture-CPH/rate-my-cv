import React from 'react';
import { Star } from './Star';
import PropTypes from 'prop-types';

export function RatingStars({ averageStars }) {
  const reminder = `${((averageStars % 20) / 20) * 100}%`;
  const filledStar = parseInt(averageStars / 20, 10);
  // Get average stars and change the number to two parts.
  // one part is integer and one one prt is not integer.
  // for example if the average number is 3.72 so the inetegr part is 3 and the decimal part is 0.72.
  // I put decimal part in reminder and integr part in filledStar.

  const stars = [1, 2, 3, 4, 5];
  // Here we have 5 star and that is why I put 5 number in the stars array

  return (
    <div style={{ display: 'flex', direction: 'row' }}>
      {stars.map((i) => {
        return i < filledStar ? (
          <div style={{ marginLeft: '8px' }} key={`filledStar${i}`}>
            <Star averageRatingInPercent="100%" />
          </div>
        ) : (
          <div style={{ marginLeft: '8px' }} key={`emptyStar${i}`}>
            <Star
              averageRatingInPercent={
                i < filledStar + 1 ? reminder.toString() : '0'
              }
            />
          </div>
        );
      })}
    </div>
  );
}

RatingStars.propTypes = {
  averageStars: PropTypes.number.isRequired,
};
