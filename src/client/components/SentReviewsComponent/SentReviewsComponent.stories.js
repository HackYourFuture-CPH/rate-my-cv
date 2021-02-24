import man from '../../assets/images/portraits/man2.jpg';
import woman from '../../assets/images/portraits/woman3.jpg';
import womanTwo from '../../assets/images/portraits/woman1.jpg';

import { SentReviewsComponent } from './SentReviewsComponent';
import React from 'react';

export default { title: 'Sent Reviews Component' };

const reviews = [
  {
    // Information for the person that gives the review
    id: 123,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdDate: new Date(),
    reviewer: {
      fullName: 'Ghofrane Ben Hmaid',
      profileImageUrl: man,
    },
    // Information for the person that receives the review
    cv: {
      fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
      averageStars: 4,
      createdDate: new Date(),
      author: {
        fullName: 'Stephanie Hicks',
        profileImageUrl: woman,
      },
    },
  },
];

export const SentReviews = () => <SentReviewsComponent reviews={reviews} />;

const reviewsTwo = [
  {
    id: 1,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdDate: new Date(),
    reviewer: {
      fullName: 'Ghofrane Ben Hmaid',
      profileImageUrl: man,
    },
    cv: {
      fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
      averageStars: 4,
      createdDate: new Date(),
      author: {
        fullName: 'Stephanie Hicks',
        profileImageUrl: woman,
      },
    },
  },

  {
    id: 2,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdDate: new Date(),
    reviewer: {
      fullName: 'Ghofrane Ben Hmaid',
      profileImageUrl: man,
    },
    cv: {
      fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
      averageStars: 4,
      createdDate: new Date(),
      author: {
        fullName: 'Stephanie Mendrala',
        profileImageUrl: womanTwo,
      },
    },
  },

  {
    id: 3,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdDate: new Date(),
    reviewer: {
      fullName: 'Ghofrane Ben Hmaid',
      profileImageUrl: man,
    },
    cv: {
      fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
      averageStars: 4,
      createdDate: new Date(),
      author: {
        fullName: 'Valentina Méndez',
        profileImageUrl: '',
      },
    },
  },
];

export const SentReviewsTwo = () => (
  <SentReviewsComponent reviews={reviewsTwo} />
);
