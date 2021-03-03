import React from 'react';
import useForm from './useForm';
import validate from './Validation';
import './LoginForm.css';
import iconGithub from '../../assets/images/icons/github.svg';
import Button from '../Button/Button';

function LoginForm({ onSubmit }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    validate,
    onSubmit,
    {
      email: '',
      password: '',
    },
  );

  return (
    <div className="container-login">
      <div className="heading-login">
        <h2>Signin to review resume</h2>
        <div className="button-image">
          <Button
            buttonName="Log in with Linkedin"
            style={{ backgroundColor: '#0388fc' }}
          />
          <div className="github-container">
            <img className="github-logo" src={iconGithub} alt="github icon" />
          </div>
        </div>
        <div className="partition">
          <h3>Or</h3>
        </div>
      </div>

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="input-label">
          <label> Username or Email Address</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="email-input"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label className="input-label"> Password</label>
          <span className="text-pwd"> Forgot Password?</span>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="signin-btn">
          <Button
            buttonName="Sign in"
            type="submit"
            style={{ backgroundColor: '#DA532C' }}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
