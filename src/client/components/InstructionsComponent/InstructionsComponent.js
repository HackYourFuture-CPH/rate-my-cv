import React from 'react';
import upload from '../../assets/images/upload.png';
import feedback from '../../assets/images/feedback.png';
import notification from '../../assets/images/notification.png';
import './InstructionsComponent.css';

export const InstructionsComponent = () => {
  return (
    <div className="instructions-container">
      <h2>How it Works</h2>
      <div className="all-images">
        <div className="image-block">
          <img src={upload} alt="Uploadimage" />
          <p>Upload your resume</p>
        </div>
        <div className="image-block">
          <img src={feedback} alt="Feedbackimage" />
          <p>Others can take a look at your resume and give you feedback</p>
        </div>
        <div className="image-block">
          <img src={notification} alt="Notificationimage" />
          <p>You get a notification with feedback and rating</p>
        </div>
      </div>
    </div>
  );
};
