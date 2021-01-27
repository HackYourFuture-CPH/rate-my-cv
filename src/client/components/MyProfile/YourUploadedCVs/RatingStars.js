import React from 'react';
import { Star } from './Star';

export function RatingStars({ averageStars }) {
  const reminder = `${((averageStars % 20) / 20) * 100}%`;
  const filledStar = parseInt(averageStars / 20, 10);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: 'flex', direction: 'row' }}>
      {stars.map((x, i) => {
        return i < filledStar ? (
          <div style={{ marginLeft: '8px' }}>
            <Star averageRatingInPercent="100%" />{' '}
          </div>
        ) : (
          <div style={{ marginLeft: '8px' }}>
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
