import React from 'react';
import TitleDesc from './TitleDesc';

export default { title: 'Title component' };

export const title = () => (
  <TitleDesc
    title="Here goes the title"
    description="Here goes the description"
  />
);
