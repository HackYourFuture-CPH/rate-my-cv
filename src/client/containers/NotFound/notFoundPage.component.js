import React from 'react';
import ErrorLogo from '../../assets/images/portraits/404.png';
import './notFoundPage.style.css';
import Text from '../../components/Text/Text.component';

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
              <Text
                header="Page not found"
                description={
                  "The page you are looking for does't exist or another error occurred."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
