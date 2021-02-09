import React from 'react';
import ReviewEditorComponent from './ReviewEditorComponent';
import womanthree from '../../assets/images/portraits/woman3.jpg';

export default { title: 'review' };

export const Component = () => (
  <ReviewEditorComponent avatarUrl={womanthree}     fullName="Jonathan Andersen"
  />
);

// export default { title: 'Sample Component' };

// export const Component = () => <SampleComponent title="Test title" />;
