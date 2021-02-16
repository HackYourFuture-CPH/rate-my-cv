import man from '../../assets/images/portraits/man2.jpg';
import { ReviewerPreviewComponent } from './ReviewerPreviewComponent';
import React from 'react';

export default { title: 'Reviewer preview component' };

export const ReviewerOne = () => (
  <ReviewerPreviewComponent
    profileImageUrl={man}
    fullName="Jonathan Andersen"
    createdDate={new Date()}
    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  />
);
