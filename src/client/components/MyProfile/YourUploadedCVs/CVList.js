import React from 'react';
import './YourUploadedCVs.css';

export function CVList({ title, date }) {
  return (
    <li>
      <div className="cvTitle">{title}</div>
      <div className="cvDate">{date}</div>
    </li>
  );
}
