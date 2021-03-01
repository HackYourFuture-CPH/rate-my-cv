import React, { useState } from 'react';
import { signUp } from '../../firebase/auth';
import SignUp from '../../components/Forms/SignUp';
import Loader from '../../components/Loader';
import { useHistory } from 'react-router-dom';
import { SideBanner } from '../../components/SideBanner/SideBanner';
import signUpImg from '../../assets/images/sign-up.png';
import './SignUp.css';

const getDoesPasswordsMatch = ({ password, passwordConfirm }) =>
  password === passwordConfirm;

export default function SignUpContainer() {
  const history = useHistory();
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
    profileImageUrl,
  }) => {
    setIsLoading(true);
    const doesPasswordsMatch = getDoesPasswordsMatch({
      password,
      passwordConfirm,
    });
    if (!doesPasswordsMatch) {
      setIsLoading(false);
      alert("Passwords don't match");
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
          profileImageUrl,
        }),
      });
      setIsLoading(false);
      history.push('/profile');
    }
  };
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="split sign-up-left">
        <div>
          <SideBanner
            image={signUpImg}
            style={{ backgroundColor: '#F1C644' }}
          />
        </div>
      </div>
      <div className="split sign-up-right">
        <div className="centered">
          <SignUp onSubmit={onSubmit} className="form-sign-up" />
        </div>
      </div>
    </div>
  );
}
