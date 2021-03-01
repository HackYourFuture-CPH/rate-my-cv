import React from 'react';
import Button from './Button';
import { withKnobs, text, object } from '@storybook/addon-knobs';

export default {
  title: 'My Button',
  decorators: [withKnobs],
  style: object,
};
export const Primary = () => {
  const style = {
    backgroundColor: 'orange',
    border: '1px solid black',
    borderRadius: 4,
    fontSize: 15,
  };
  return (
    <Button
      buttonName={text('Label', 'Primary')}
      style={object('Style', style)}
      type="submit"
      onClick={() => {
        ('clicked');
      }}
    />
  );
};
export const Secondary = () => {
  const style = {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 4,
    fontSize: 15,
    color: 'black',
  };
  return (
    <Button
      buttonName={text('Label', 'Secondary')}
      style={object('Style', style)}
      type="submit"
      onClick={() => {
        ('clicked');
      }}
    />
  );
};
