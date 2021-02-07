import man from '../../assets/images/portraits/man2.jpg';
import woman from '../../assets/images/portraits/woman3.jpg';
import React from 'react';
import { CvcardList } from './CvcardList';

export default { title: 'cv card list search' };
const data = [
  {
    profileImageUrl: man,
    fullName: 'Daniel Robertson',
    position: 'Programmer',
    cvTitle: 'Programmer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Daniella Robertson',
    position: 'Programmer',
    cvTitle: 'Programmer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Dotte Robertson',
    position: 'UX/UI designer',
    cvTitle: 'UX/UI designer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: woman,
    fullName: 'Darlene Robertson',
    position: 'UX/UI designer',
    cvTitle: 'UX/UI designer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Jenny Wilson',
    position: 'Graphic designer',
    cvTitle: 'Graphic designer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Mette Sørensen',
    position: 'Full stack web developer',
    cvTitle: 'Full stack web developer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Maria Bjørn',
    position: 'Lærer',
    cvTitle: 'Dansk',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'John Pedersen',
    position: 'Scientist',
    cvTitle: 'Environmental Scientist at Miljøstyrelsen',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: man,
    fullName: 'Daniel Robertson',
    position: 'Programmer',
    cvTitle: 'Programmer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Daniella Robertson',
    position: 'Programmer',
    cvTitle: 'Programmer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Dotte Robertson',
    position: 'UX/UI designer',
    cvTitle: 'UX/UI designer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: woman,
    fullName: 'Darlene Robertson',
    position: 'UX/UI designer',
    cvTitle: 'UX/UI designer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Jenny Wilson',
    position: 'Graphic designer',
    cvTitle: 'Graphic designer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Mette Sørensen',
    position: 'Full stack web developer',
    cvTitle: 'Full stack web developer',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'Maria Bjørn',
    position: 'Lærer',
    cvTitle: 'Dansk',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
  {
    profileImageUrl: '',
    fullName: 'John Pedersen',
    position: 'Scientist',
    cvTitle: 'Environmental Scientist at Miljøstyrelsen',
    fileUrl: 'https://zety.com/blog/banking-resume-example',
    createdDate: new Date(),
  },
];
export const CvcardListSearch = () => (
  <CvcardList title="All resumes 16 results" data={data} />
);
