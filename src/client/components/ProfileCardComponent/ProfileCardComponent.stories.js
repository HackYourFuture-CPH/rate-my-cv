import man from '../../assets/images/portraits/man1.jpg';
import woman from '../../assets/images/portraits/woman1.jpg';
import womanthree from '../../assets/images/portraits/woman3.jpg';
import { ProfileCardComponent } from './ProfileCardComponent';
import React from 'react';

export default { title: 'Profile Card Component' };

export const Component = () => (
  <ProfileCardComponent
    profileImageUrl={woman}
    fullName="Stephanie Hicks"
    position="Student"
    linkedin="arianavalentinamendez/"
    website="https://www.google.com/"
    github="valmdz"
  />
);

export const ComponentTwo = () => (
  <ProfileCardComponent
    profileImageUrl={man}
    fullName="Jonathan Andersen"
    position="Web developer"
    linkedin="arianavalentinamendez/"
    website=""
    github="valmdz"
  />
);

export const ComponentThree = () => (
  <ProfileCardComponent
    profileImageUrl={womanthree}
    fullName="Stephanie Mendrala"
    position="Scientist"
  />
);

export const ComponentFour = () => (
  <ProfileCardComponent
    fullName="Valentina Méndez"
    position="Web developer"
    linkedin="arianavalentinamendez/"
    website="https://www.google.com/"
    github="valmdz"
  />
);
