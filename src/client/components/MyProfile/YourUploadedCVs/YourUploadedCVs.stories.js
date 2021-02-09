import React from 'react';
import { YourUploadedCVs } from './YourUploadedCVs';

export default {
  title: 'YourUploadedCVs',
  component: YourUploadedCVs,
};

export const YourUploadedCV = () => (
  <YourUploadedCVs
    CVsList={[
      {
        id: 3,
        title: 'Mechanical Engineer',
        created_date: '2020-10-20',
        averageStars: 4.5,
      },
      {
        id: 5,
        title: 'Technical Auditor',
        created_date: '2021-01-21',
        averageStars: 3.4,
      },
      {
        id: 9,
        title: 'ghofranebenhamid-vc-v3',
        created_date: '2021-03-21',
        averageStars: 4,
      },
      {
        id: 10,
        title: 'React Programmer',
        created_date: '2021-03-25',
        averageStars: 2.4,
      },
    ]}
  />
);
