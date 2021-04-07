import React from 'react';
import { ListOfReviewPostComponent } from './ListOfReviewPostComponent';
import profileImage1 from '../../../assets/images/portraits/man1.jpg';
import profileImage2 from '../../../assets/images/portraits/man2.jpg';

export default {
  title: 'ListOfReviewPostComponent',
  component: ListOfReviewPost,
};

export const ListOfReviewPost = () => (
  <ListOfReviewPostComponent
    postedReviews={[
      {
        id: 1,
        profileImageUrl: `${profileImage1}`,
        fullName: 'Hamed Karachi',
        review:
          'I reaaly like all parts of CV. It is clearly defined in which sections youi have abilities and skills. Just try to describe more about your background before when you start working as a project manager',
        createdDate: new Date(),
      },
      {
        id: 2,
        fullName: 'Mahmood Ehsani',
        review:
          'I believe that introduction section has an opportunity to be imporved in a matter that if recruiters wanted to know about your backgoround that can easily find out. try to remove some unrelevant thins from your CV as well.',
        createdDate: new Date(),
      },
      {
        id: 3,
        profileImageUrl: `${profileImage2}`,
        fullName: 'Christoffer Tawn',
        review:
          'Everything is placed perfectly in CV except your picture. In my opinion it is not so attractive and energetic. try to change it with the smily one and a little bit formal as you want to introduce yourself as a project manager.',
        createdDate: new Date(),
      },
      {
        id: 4,
        fullName: 'John Rusmossen',
        review:
          'I really enjoy design of your CV. I looks fantastic and attarctive. If I wanna give you a feedback for imporving your CV I should say that try to bring relevant backgrounds in a way that they seems more bolder than unrelevant background.',
        createdDate: new Date(),
      },
    ]}
  />
);
