import man from '../../assets/images/portraits/man2.jpg';
import woman from '../../assets/images/portraits/woman3.jpg';
import React from 'react';
import { CvcardList } from './CvcardList';

export default { title: 'cv card list search' };
const cvs = [
  {
    profile_image_url: man,
    full_name: 'Daniel Robertson',
    position: 'Programmer',
    title: 'Programmer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Daniella Robertson',
    position: 'Programmer',
    title: 'Programmer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Dotte Robertson',
    position: 'UX/UI designer',
    title: 'UX/UI designer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: woman,
    full_name: 'Darlene Robertson',
    position: 'UX/UI designer',
    title: 'UX/UI designer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Jenny Wilson',
    position: 'Graphic designer',
    title: 'Graphic designer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Mette Sørensen',
    position: 'Full stack web developer',
    title: 'Full stack web developer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Maria Bjørn',
    position: 'Lærer',
    title: 'Dansk',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'John Pedersen',
    position: 'Scientist',
    title: 'Environmental Scientist at Miljøstyrelsen',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: man,
    full_name: 'Daniel Robertson',
    position: 'Programmer',
    title: 'Programmer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Daniella Robertson',
    position: 'Programmer',
    title: 'Programmer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Dotte Robertson',
    position: 'UX/UI designer',
    title: 'UX/UI designer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: woman,
    full_name: 'Darlene Robertson',
    position: 'UX/UI designer',
    title: 'UX/UI designer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'Jenny Wilson',
    position: 'Graphic designer',
    title: 'Graphic designer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: '',
    full_name: 'ember blooming',
    position: 'frontend developer',
    title: 'frontend developer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: woman,
    full_name: 'Stephanie Hicks',
    position: 'Integrated Client Manager',
    title: 'Project Manager',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
  {
    profile_image_url: man,
    full_name: 'Jonathan Andersen',
    position: 'Fullstack Engineer',
    title: 'Fullstack Engineer',
    file_url: 'https://zety.com/blog/banking-resume-example',
    created_date: new Date(),
  },
];
export const CvcardListSearch = () => (
  <CvcardList title="All resumes 16 results" cvs={cvs} />
);
