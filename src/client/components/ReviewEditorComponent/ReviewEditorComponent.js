import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import unknownUser from '../../assets/images/portraits/unknown-black.png';
import './ReviewEditorComponent.style.css';

export default function ReviewEditorComponent({
  avatarUrl,
  fullName,
  placeHolderText,
  buttonStyle,
  returnTextState
}) {
  const [inputValue, setInputValue] = useState();
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="container">
      <div className="top-part">
        <div className="profile-picture">
          <div className="circle-mask">
            <img
              src={avatarUrl || unknownUser}
              alt="Portrait of user"
              className="user-photo"
            />
          </div>
        </div>
        <div className="user-info">
          <div className="user-name">{fullName}</div>
        </div>
      </div>
      <div className="input-part">
        <textarea
          value={inputValue}
          placeholder={placeHolderText}
          onChange={onChange}
        />
      </div>
      <div className="button-part">
        <Button
          buttonName="Send review"
          style={buttonStyle}
          type="submit"
          onClick={() => {
            // ('clicked');
            returnTextState(inputValue)
          }}
        />
      </div>
    </div>
  );
}
ReviewEditorComponent.propTypes = {
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  returnTextState: PropTypes.func,
  placeHolderText: PropTypes.string,
  buttonStyle: PropTypes.string,
};
ReviewEditorComponent.defaultProps = {
  avatarUrl: {},
  returnTextState: {},
  placeHolderText: {},
  buttonStyle:{ backgroundColor: 'blue', fontWeight: 'bold' }
}