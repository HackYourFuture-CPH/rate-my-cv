import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '../Button/Button';
import './RegisterButton.style.css';

function RegisterButton() {
    const history = useHistory();

    const redirect = () => {
      history.push('/sign-up')
    }
    return (
        <div className="homepage">
          <section className="homepage-slogan">
          <h2>Improve Your Resume To Present Your Best Self</h2>  
          <p>Upload your Resume to get an evaluation</p>
          <Button buttonName='Register' style={{ backgroundColor: '#F25B06' }} onClick={redirect}/>
          </section>
        </div>
    )
}

export default RegisterButton
