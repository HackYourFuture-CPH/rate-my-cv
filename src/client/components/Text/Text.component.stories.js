import React from 'react';
import Text from './Text.component';

export default { title: 'Text' };

export const Simple = () => (
  <Text
    header="Test title"
    description={"The page you are looking for doesn't exist or another error occoured."}
  />
);
