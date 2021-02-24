import React, { useState } from 'react';
import { signIn } from '../../firebase/auth';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader';
import { SideBanner } from '../../components/SideBanner/SideBanner';
import signInImg from '../../assets/images/sign-in.png';
import './SignIn.css';
import { NavLink } from 'react-router-dom';

export default function SignInContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async ({ email, password }) => {
    setIsLoading(true);
    await signIn({ email, password });
    setIsLoading(false);
  };
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="split sign-in-left">
        <SideBanner image={signInImg} />
      </div>
      <div className="centered split sign-in-right">
        <div className="not-member">
          Not a member ? <NavLink to="/sign-up/">Sign up now </NavLink>
        </div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
