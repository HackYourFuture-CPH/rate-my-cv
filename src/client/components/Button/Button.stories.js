import React from 'react';
import Button from './Button';
import { withKnobs, text, color } from '@storybook/addon-knobs';

export default {
  title: 'My Button',
  decorators: [withKnobs],
};
export const Primary = () => {
  return (
    <Button
      buttonName={text('Label', 'Primary')}
      backgroundColor={color('backgroundColor', 'orange')}
    />
  );
};
export const Secondary = () => {
  return (
    <Button
      buttonName={text('Label', 'Secondary')}
      backgroundColor={color('backgroundColor', 'blue')}
    />
  );
};
