import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
 import unknownUser from '../../assets/images/portraits/unknown-black.jpg';
// /assets/images/portraits/unknown-black.jpg
//     "heroku-postbuild": "npm run db:setup"

export default function ReviewEditorComponent({
  avatarUrl,
  fullName,
  inputText,
  // placeHolderText,
  // buttonStyle,
}) {
  // const [inputValue,setInputValue] = useState()
  console.log('url',avatarUrl);
  return (
    <div className="container" style={{border:'1px solid black'
    }}>
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
        <input type="text" placeholder='hello'/>
      </div>
      <div className="button-part">
        <Button
          buttonName="Send review"
           style={{ backgroundColor: 'blue'}}
          // style={buttonStyle}
          type="submit"
          onClick={() => {
            ('clicked');
          }}
        />
      </div>
    </div>
  );
}


ReviewEditorComponent.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  inputText: PropTypes.string,
  placeHolderText:PropTypes.string
  //buttonStyle:PropTypes.string
};

ReviewEditorComponent.defaultProps = {
    inputText:{},
    placeHolderText: {}
    // 'Enter to send. Shift + Enter to add new line.',
    //buttonStyle: {}
  };
