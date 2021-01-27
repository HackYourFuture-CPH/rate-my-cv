import React, { useState } from 'react';
import { signUp } from '../../firebase/auth';
import UserCreationSuccess from '../../components/Success/UserCreationSuccess';
import SignUp from '../../components/Forms/SignUp';
import Loader from '../../components/Loader';

const getDoesPasswordsMatch = ({ password, passwordConfirm }) =>
  password === passwordConfirm;

export default function SignUpContainer() {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({
    email,
    password,
    passwordConfirm,
    fullName,
    position,
    linkedin,
    github,
    website,
  }) => {
    setIsLoading(true);
    const doesPasswordsMatch = getDoesPasswordsMatch({
      password,
      passwordConfirm,
    });
    if (!doesPasswordsMatch) {
      setIsLoading(false);
      alert("Passwords doesn't match");
      return;
    }
    const firebaseUser = await signUp({ email, password });
    if (firebaseUser) {
      await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firebaseToken: firebaseUser.user.uid,
          fullName,
          position,
          linkedin,
          github,
          website,
        }),
      });
      setIsSuccessful(true);
    }

    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  if (isSuccessful) return <UserCreationSuccess />;
  return <SignUp onSubmit={onSubmit} />;
}
