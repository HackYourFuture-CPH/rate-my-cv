import React from 'react';
import './YourUploadedCVs.css';

export function Star({ averageRatingInPercent }) {
  return (
    <div className="ratings">
      <div className="empty-stars" />
      <div
        className="full-stars"
        style={{ width: `${averageRatingInPercent}` }}
      />
    </div>
  );
}
