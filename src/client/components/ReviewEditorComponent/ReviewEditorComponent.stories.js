import React from 'react';
import ReviewEditorComponent from './ReviewEditorComponent';
import womanthree from '../../assets/images/portraits/woman3.jpg';

export default { title: 'ReviewEditorComponent' };

export const Scenario1 = () => (
  <ReviewEditorComponent
    avatarUrl={womanthree}
    fullName="Jonathan Andersen"
    placeHolderText="Enter to send. Shift + Enter to add new line."
    buttonStyle={{ backgroundColor: 'blue', fontWeight: 'bold' }}
  />
);
export const Scenario2 = () => (
  <ReviewEditorComponent
    fullName="Jonathan Andersen"
    placeHolderText="Enter to send. Shift + Enter to add new line."
    buttonStyle={{ backgroundColor: 'blue', fontWeight: 'bold' }}
  />
);
