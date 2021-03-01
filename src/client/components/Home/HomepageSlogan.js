import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import './HomepageSlogan.style.css';
import homePicture from '../../assets/images/home-slogan.jpg';

function HomepageSlogan() {
  const history = useHistory();

  const redirect = () => {
    history.push('/sign-up');
  };
  return (
    <section className="homepage-slogan">
      <img src={homePicture} alt="background-img" />
      <div className="text-overlay">
        <h2>Improve Your Resume To Present Your Best Self</h2>
        <p>Upload your Resume to get an evaluation</p>
        <Button
          buttonName="Register"
          style={{ backgroundColor: '#F25B06' }}
          onClick={redirect}
        />
      </div>
    </section>
  );
}

export default HomepageSlogan;
