import React, { useState } from 'react';
import PropTypes from 'prop-types';
import iconGithub from '../../assets/images/icons/github.svg';
import './SignUp.style.css';
import Button from '../Button/Button';

export default function SignUp({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [validation, setValidation] = useState('');

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleNameInput = (e) => setName(e.target.value);
  const handlePositionInput = (e) => setPosition(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleLinkedinInput = (e) => setLinkedin(e.target.value);
  const handleGithubInput = (e) => setGithub(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handlePasswordConfirmInput = (e) => setPasswordConfirm(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setValidation('**Your password does not match**');
    }
    setValidation('');
    onSubmit({ email, password, passwordConfirm });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2> Signup to Review Resume </h2>

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
        <h3 className="or"> Or</h3>

        <label className="label" htmlFor="Name">
          Name
          <input
            className="input"
            type="text"
            name="Name"
            placeholder=""
            value={name}
            onChange={handleNameInput}
            required
          />
        </label>
        <label className="label" htmlFor="position">
          Position
          <input
            className="input"
            type="text"
            name="position"
            placeholder=""
            value={position}
            onChange={handlePositionInput}
            required
          />
        </label>
        <br />
        <label className="label" htmlFor="email">
          Email
          <input
            className="input"
            type="email"
            name="email"
            placeholder=""
            value={email}
            onChange={handleEmailInput}
            required
          />
        </label>
        <label className="label" htmlFor="img">
          Profile Picture
          <input
            className="input"
            type="url"
            name="img"
            placeholder="profile image link"
            value={image}
            onChange={handleImageInput}
            required
          />
        </label>
        <label className="label" htmlFor="linkedin">
          LinkedIn
          <input
            className="input"
            type="url"
            name="linkedin"
            placeholder="LinkedIn profile link"
            value={linkedin}
            onChange={handleLinkedinInput}
            required
          />
        </label>
        <label className="label" htmlFor="github">
          Github
          <input
            className="input"
            type="url"
            name="github"
            placeholder="Github profile link"
            value={github}
            onChange={handleGithubInput}
            required
          />
        </label>
        <br />
        <label className="label" htmlFor="password">
          Password
          <input
            className="input"
            type="password"
            name="password"
            placeholder=""
            value={password}
            onChange={handlePasswordInput}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            required
          />
        </label>
        <br />
        <label className="label" htmlFor="password">
          Password-confirm
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Write your password again"
            value={passwordConfirm}
            onChange={handlePasswordConfirmInput}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            required
          />
        </label>

        <label className="label-checkbox">
          <input className="input-checkbox" type="checkbox" id="check" />
          Create an account means you're ok with our Terms of Service, Privacy,
          Policy and our default Notification Settings
        </label>
        <br />

        <Button
          buttonName="Create Account"
          style={{ backgroundColor: '#da532c' }}
          type="submit" //  type can be change according to button component
        />

        <div className="validation">{validation}</div>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
