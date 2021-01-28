import React, { useState } from 'react';
import PropTypes from 'prop-types';
import iconGithub from '../../assets/images/icons/github.svg';
import './SignUpstyle.css';

export default function SignUp({ onSubmit }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [validation, setValidation] = useState('');
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleNameInput = (e) => setName(e.target.value);
  const handleUserNameInput = (e) => setUserName(e.target.value);
  const handlePositionInput = (e) => setPosition(e.target.value);
  const handleLinkedinInput = (e) => setLinkedin(e.target.value);
  const handleGithubInput = (e) => setGithub(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handlePasswordConfirmInput = (e) => setPasswordConfirm(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setValidation('******Your password does not match*****');
    }
    setValidation('');
    onSubmit({ email, password, passwordConfirm });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2> Signup to Review Resume </h2>
        <button className="btn-Linkedin">Signup with LinkedIn</button>{' '}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={iconGithub}></img> <br></br>
        <h3>&nbsp; Or &nbsp;</h3>
        <label htmlFor="Name">
          Name <br></br>
          <input
            type="text"
            name="Name"
            placeholder=""
            value={name}
            onChange={handleNameInput}
            required
          />
        </label>
        <label htmlFor="UserName">
          UserName
          <input
            type="text"
            name="UserName"
            placeholder=""
            value={userName}
            onChange={handleUserNameInput}
            required
          />{' '}
        </label>
        <label htmlFor="position">
          Position{' '}
          <input
            type="password"
            name="position"
            placeholder=""
            value={position}
            onChange={handlePositionInput}
            required
          />
        </label>
        <br></br>
        <label htmlFor="email">
          Email{' '}
          <input
            type="email"
            name="email"
            placeholder=""
            value={email}
            onChange={handleEmailInput}
            required
          />
        </label>{' '}
        <br></br>
        <label htmlFor="linkedin">
          LinkedIn{' '}
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn profile link"
            value={linkedin}
            onChange={handleLinkedinInput}
          />
        </label>
        <br></br>
        <label htmlFor="github">
          Github{' '}
          <input
            type="url"
            name="github"
            placeholder="Github profile link"
            value={github}
            onChange={handleGithubInput}
          />
        </label>
        <br></br>
        <label htmlFor="password">
          Password{' '}
          <input
            type="password"
            name="password"
            placeholder=""
            value={password}
            onChange={handlePasswordInput}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </label>{' '}
        <br></br>
        <label htmlFor="password">
          Password-confirm{' '}
          <input
            type="password"
            name="password"
            placeholder="Write your password again"
            value={passwordConfirm}
            onChange={handlePasswordConfirmInput}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </label>
        <br></br>
        <label className="label-checkbox">
          <input type="checkbox" id="check" disabled=""></input>
          Create an account means you're okey with our Terms of Service,
          Privacy,Policy and our default Notification Settings
        </label>{' '}
        <br></br>
        <br></br>
        <button className="btn-account" type="submit">
          Create Account
        </button>
        <div className="validation">{validation}</div>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
