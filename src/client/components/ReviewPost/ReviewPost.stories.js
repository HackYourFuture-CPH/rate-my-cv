import React from 'react';
import { ReviewPost } from './ReviewPost';
import profileImage from '../../assets/images/portraits/man1.jpg';

export default {
  title: 'Components |Review post for CV review',
};

export const ReviewCV = () => (
  <ReviewPost
    fullName="Arlene McCoy"
    review="Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Praesent commodo sapien lacus,sit amet tristique lorem placerat at. Integer dolor mi, viverra pellentesque nisl quis,egestas dapibus magna."
    createdDate={new Date()}
  />
);
export const ReviewCV1 = () => (
  <ReviewPost
    profileImageUrl={profileImage}
    fullName="Arlene McCoy"
    review="Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Praesent commodo sapien lacus,sit amet tristique lorem placerat at. Integer dolor mi, viverra pellentesque nisl quis,egestas dapibus magna."
    createdDate={new Date()}
  />
);
