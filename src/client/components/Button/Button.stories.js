import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'My Button',
  decorators: [withKnobs],
};
export const Primary = () => {
  return (
    <Button
      buttonName={text('Label', 'Primary')}
      type="submit"
      onClick={() => {
        ('clicked');
      }}
    />
  );
};
export const Secondary = () => {
  return (
    <div className="secondary">
      <Button
        buttonName={text('Label', 'Secondary')}
        type="submit"
        onClick={() => {
          ('clicked');
        }}
      />
    </div>
  );
};
