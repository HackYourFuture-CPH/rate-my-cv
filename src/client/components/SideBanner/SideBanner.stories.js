import signUp from '../../assets/images/sign-up.png';
import signIn from '../../assets/images/sign-in.png';
import React from 'react';
import { SideBanner } from './SideBanner';

export default { title: 'Side Banner for Sign up-Sign in' };

export const SignUp = () => (
  <SideBanner image={signUp} style={{ backgroundColor: '#F1C644' }} />
);

export const SignIn = () => (
  <SideBanner image={signIn} style={{ backgroundColor: '#6236FF' }} />
);
