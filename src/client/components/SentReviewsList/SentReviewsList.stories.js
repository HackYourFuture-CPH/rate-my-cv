import { SentReviewsList } from './SentReviewsList';
import React from 'react';

export default { title: 'Sent reviews list' };

export const SentReviewsListOne = () => (
  <SentReviewsList
    reviews={[
      [
        {
          // Information for the person that gives the review
          id: 123,
          review:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdDate: new Date(),
          reviewer: {
            fullName: 'Ghofrane Ben Hmaid',
            profileImageUrl: 'http://placekitten.com/200/200',
          },
          // Information for the person that receives the review
          cv: {
            fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
            averageStars: 4,
            createdDate: new Date(),
            author: {
              fullName: 'Stephanie Hicks',
              profileImageUrl: 'http://placekitten.com/150/150',
            },
          },
        },
      ],

      [
        {
          id: 1,
          review:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdDate: new Date(),
          reviewer: {
            fullName: 'Ghofrane Ben Hmaid',
            profileImageUrl: 'http://placekitten.com/200/200',
          },
          cv: {
            fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
            averageStars: 4,
            createdDate: new Date(),
            author: {
              fullName: 'Stephanie Hicks',
              profileImageUrl: 'http://placekitten.com/150/150',
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
            profileImageUrl: 'http://placekitten.com/200/200',
          },
          cv: {
            fileUrl: 'http://www.africau.edu/images/default/sample.pdf',
            averageStars: 4,
            createdDate: new Date(),
            author: {
              fullName: 'Stephanie Mendrala',
              profileImageUrl: 'http://placekitten.com/250/250',
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
            profileImageUrl: 'http://placekitten.com/200/200',
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
      ],
    ]}
  />
);
