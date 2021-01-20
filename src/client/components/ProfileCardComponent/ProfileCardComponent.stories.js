import man from '../../assets/images/portraits/man1.jpg';
import woman from '../../assets/images/portraits/woman1.jpg';
import womanthree from '../../assets/images/portraits/woman3.jpg';
import { ProfileCardComponent } from './ProfileCardComponent';
import React from 'react';

export default { title: 'Profile Card Component' };

export const Component = () => (
  <ProfileCardComponent
    profile_image_url={woman}
    full_name="Stephanie Hicks"
    position="Student"
    linkedin="arianavalentinamendez/"
    website="https://www.google.com/"
    github="valmdz"
  />
);

export const Component_two = () => (
  <ProfileCardComponent
    profile_image_url={man}
    full_name="Jonathan Andersen"
    position="Web developer"
    linkedin="arianavalentinamendez/"
    website=""
    github="valmdz"
  />
);

export const Component_three = () => (
  <ProfileCardComponent
    profile_image_url={womanthree}
    full_name="Stephanie Mendrala"
    position="Scientist"
  />
);

export const Component_four = () => (
  <ProfileCardComponent
    full_name="Valentina Méndez"
    position="Web developer"
    linkedin="arianavalentinamendez/"
    website="https://www.google.com/"
    github="valmdz"
  />
);
