import React from 'react';
import ErrorLogo from '../../assets/images/404.png';
import './notFoundPage.style.css';

export default function NotFoundPage() {
  return (
    <>
      <div className="page-404">
        <div className="container">
          <div className="image-wrapper">
            <img src={ErrorLogo} alt="Error Logo" className="image" />
          </div>
          <div className="text">
            <div className="number-404">404</div>
            <div className="text-container">
              <h2>Page not found</h2>
              <p>
                The page you are looking for does&rsquo;t exist or another error
                occurred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
