import signUp from '../../assets/images/sign-up.png';
import signIn from '../../assets/images/sign-in.png';
import React from 'react';
import { SignUpSignInLeft } from './SignUpSignInLeft';

export default { title: 'Sign up-Sign in Component' };

export const SignUp = () => (
  <SignUpSignInLeft image={signUp} style={{ backgroundColor: '#F1C644' }} />
);

export const SignIn = () => (
  <SignUpSignInLeft image={signIn} style={{ backgroundColor: '#6236FF' }} />
);
