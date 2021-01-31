import React from 'react';
import Search from '../SearchComponent/Search';
import Button from '../Button/Button';
import './PageHeader.styles.css';

export default function PageHeader() {
  return (
    <div>
      <div className="cv-loader">
        <div>Uploaded Resume</div>        
          <div className = "cv-button">
            <Button buttonName={'Upload New Cv'} backgroundColor = {("backgroundColor", "black")} />
          </div>
        </div>
      <div className="search-button">
        <Search />
      </div>
    </div>
  );
}
