import React from 'react';
import { ReviewPost } from './ReviewPost';

export default {
  title: 'Components |Review post for CV review',
};

export const ReviewCV = () => (
  <ReviewPost
    name="Arlene McCoy"
    description="Lorem ipsum dolor sit amet,onsectetur adipiscing elit. Praesent commodo sapien lacus,sit amet tristique lorem placerat at. Integer dolor mi, viverra pellentesque nisl quis,egestas dapibus magna."
    date={new Date()}
  />
);
