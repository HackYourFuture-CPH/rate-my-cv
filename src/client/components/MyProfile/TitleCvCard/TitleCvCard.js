import React from 'react';
// import TitleDesc from './TitleCvCard'
import './TitleCvCard.styles.css';

export default function TitleCvCard() {
  return (
    <div className="whole-card">
      {/* <TitleDesc title="Here goes the title" description="Heres goes the description" />;  */}
      <h3 className="title">Here goes the title</h3>
      <p className="description">Heres goes the description</p>
    </div>
  );
}
