import React, { useState } from 'react';
import { signIn } from '../../firebase/auth';
import SignIn from '../../components/Forms/SignIn';
import Loader from '../../components/Loader';
import { SideBanner } from '../../components/SideBanner/SideBanner';
import signInImg from '../../assets/images/sign-in.png';
import './SignIn.css';

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
        <div>
          <SideBanner
            image={signInImg}
            style={{ backgroundColor: '#6236FF' }}
          />
        </div>
      </div>
      <div className="split sign-in-right">
        <div className="centered">
          <SignIn onSubmit={onSubmit} className="form-sign-in" />
        </div>
      </div>
    </div>
  );
}
