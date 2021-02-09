import React from 'react';
import ReviewEditorComponent from './ReviewEditorComponent';
import womanthree from '../../assets/images/portraits/woman3.jpg';

export default { title: 'review' };

export const Component = () => (
  <ReviewEditorComponent avatarUrl={womanthree} fullName="Jonathan Andersen" placeHolderText="Enter to send. Shift + Enter to add new line."
  buttonStyle={{ backgroundColor: 'blue', fontWeight: 'bold' }}/>
);
export const Component2 = () => (
  <ReviewEditorComponent  fullName="Jonathan Andersen"
  />
);


// export default { title: 'Sample Component' };

// export const Component = () => <SampleComponent title="Test title" />;
