import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import unknownUser from '../../../assets/images/portraits/unknown-black.png';
import './ReviewEditorComponent.style.css';

export default function ReviewEditorComponent({
  avatarUrl,
  fullName,
  placeHolderText,
}) {
  const [inputValue, setInputValue] = useState();
  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <div className="top-part">
        <div className="title-left">
          <div className="profile-picture">
            <div className="circle-mask">
              <img
                src={avatarUrl}
                alt="Portrait of user"
                className="user-photo"
              />
            </div>
          </div>
          <div className="user-name">{fullName}</div>
        </div>
        <div className="title-right-stars" />
      </div>
      <div className="input-part">
        <textarea
          value={inputValue}
          placeholder={placeHolderText}
          onChange={onChange}
        />
      </div>
      <div className="button-part">
        <Button className='blue-button'
          buttonName="Send review"
          style={{ backgroundColor: 'blue', fontWeight: 'bold' }}
          type="submit"
          onClick={() =>
            console.log(
              'Waiting for the backend to expose endpoint for reviewing',
            )
          }
        />
      </div>
    </div>
  );
}

ReviewEditorComponent.propTypes = {
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  placeHolderText: PropTypes.string,
};

ReviewEditorComponent.defaultProps = {
  avatarUrl: unknownUser,
  placeHolderText: 'Enter to send. Shift + Enter to add new line.',
};
