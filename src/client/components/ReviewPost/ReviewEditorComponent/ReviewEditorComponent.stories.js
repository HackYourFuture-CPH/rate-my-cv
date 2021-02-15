import React from 'react';
import ReviewEditorComponent from './ReviewEditorComponent';
import womanthree from '../../../assets/images/portraits/woman3.jpg';

export default { title: 'Components |ReviewEditorComponent' };

export const Scenario1 = () => (
  <ReviewEditorComponent avatarUrl={womanthree} fullName="Jonathan Andersen" />
);
export const Scenario2 = () => (
  <ReviewEditorComponent fullName="Jonathan Andersen" />
);
