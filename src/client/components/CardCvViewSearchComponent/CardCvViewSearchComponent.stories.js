import man from '../../assets/images/portraits/man2.jpg';
import woman from '../../assets/images/portraits/woman3.jpg';
import { CardCvViewSearchComponent } from './CardCvViewSearchComponent';
import React from 'react';

export default { title: 'Card CV view-search component' };

export const CardCVTest = () => (
  <CardCvViewSearchComponent
    profileImageUrl={man}
    fullName="Jonathan Andersen"
    position="Web developer"
    cvTitle="FrontEnd Developer developer developer"
    fileUrl="https://zety.com/blog/banking-resume-example"
    createdDate="Wed Jan 27 2021 12:42:41 GMT+0100 (Central European Standard Time)"
  />
);

export const CardCVTestTwo = () => (
  <CardCvViewSearchComponent
    profileImageUrl=""
    fullName="Ariana Valentina Méndez Jiménez"
    position="Web developer"
    cvTitle="Fullstack Developer"
    fileUrl="https://zety.com/blog/banking-resume-example"
    createdDate="Wed Jan 27 2021 12:42:41 GMT+0100 (Central European Standard Time)"
  />
);

export const CardCVTestThree = () => (
  <CardCvViewSearchComponent
    profileImageUrl={woman}
    fullName="Stephanie Mendrala"
    position="Scientist"
    cvTitle="Project Manager"
    fileUrl="https://zety.com/blog/banking-resume-example"
    createdDate="Wed Jan 27 2021 12:42:41 GMT+0100 (Central European Standard Time)"
  />
);
