import React from 'react';
import useForm from '../LoginForm/useForm';
import PropTypes from 'prop-types';
import iconGithub from '../../assets/images/icons/github.svg';
import './Signup.style.css';
import Button from '../Button/Button';
import validate from '../LoginForm/Validation';

export default function SignUp({ onSubmit }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    validate,
    onSubmit,
  );

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2>Signup to Review Resume</h2>
      <div className="button-forms">
        <Button
          buttonName="Signup With Linkedin"
          style={{ backgroundColor: '#0676f2' }}
        />
        <div className="space">
          <div className="github-container">
            <img className="github-logo" src={iconGithub} alt="github icon" />
          </div>
        </div>
      </div>
      <br />
      <h3 className="or">Or</h3>
      <label className="label" htmlFor="fullName">
        Full name:
        <input
          className="input"
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label" htmlFor="position">
        Position:
        <input
          className="input"
          type="text"
          name="position"
          value={values.position}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label" htmlFor="email" validate>
        Email:
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Write your email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="validation">{errors.email}</p>}
      </label>
      <label className="label" htmlFor="profileImageUrl">
        Profile picture:
        <input
          className="input"
          type="url"
          name="profileImageUrl"
          placeholder="profile image URL"
          value={values.profileImageUrl}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label" htmlFor="linkedin">
        LinkedIn profile:
        <input
          className="input"
          type="url"
          name="linkedin"
          placeholder="LinkedIn profile link"
          value={values.linkedin}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label" htmlFor="github">
        Github user:
        <input
          className="input"
          type="url"
          name="github"
          placeholder="Github profile link"
          value={values.github}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label" htmlFor="website">
        Website:
        <input
          className="input"
          type="url"
          name="website"
          placeholder="website URL"
          value={values.website}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" validate>
        Password:
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Write your password"
          value={values.password}
          onChange={handleChange}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          required
        />
        {errors.password && <p className="validation">{errors.password}</p>}
      </label>
      <label htmlFor="passwordConfirm">
        Password - confirm:
        <input
          className="input"
          type="password"
          name="passwordConfirm"
          placeholder="Write your password again"
          value={values.passwordConfirm}
          onChange={handleChange}
          required
        />
        {errors.passwordConfirm && (
          <p className="validation">{errors.passwordConfirm}</p>
        )}
      </label>
      <br />
      <label className="label-checkbox">
        <input className="input-checkbox" type="checkbox" id="check" />
        By signing up you agree to the Terms of Service, Privacy Policy and the
        default notifications settings
      </label>
      <br />
      <Button
        buttonName="Create Account"
        type="submit"
        style={{ backgroundColor: '#da532c' }}
      />
    </form>
  );
}
SignUp.propTypes = {
  onSubmit: PropTypes.func,
};
