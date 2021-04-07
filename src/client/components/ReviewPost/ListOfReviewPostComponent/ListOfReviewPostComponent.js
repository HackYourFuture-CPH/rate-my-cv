import React from 'react';
import { ReviewPost } from '../ReviewPost';
import './ListOfReviewPostComponent.styles.css'

export function ListOfReviewPostComponent({ postedReviews }) {
  return (
    <div className="posted-reviews-list">
      <ul>
        {postedReviews.map(rev => (
          <li key={rev.id}>
            <ReviewPost
              profileImageUrl={rev.profileImageUrl}
              fullName={rev.fullName}
              review={rev.review}
              createdDate={rev.createdDate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
