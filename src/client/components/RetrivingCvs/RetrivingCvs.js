import React, { useState, useEffect } from 'react';
import { CardCvViewSearchComponent } from '../CardCvViewSearchComponent/CardCvViewSearchComponent';

export default function RetrieveCvs() {
  const [cvs, setCvs] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetch('/api/usercv').then((res) => res.json());
      setCvs(result);
    })();
  }, []);
  return (
    <div>
      {cvs.slice(-3).map((item) => (
        <CardCvViewSearchComponent
          profileImageUrl={item.profile_image_url}
          fullName={item.full_name}
          position={item.position}
          cvTitle={item.title}
          fileUrl={item.file_url}
          createdDate={item.created_date.toLocaleString()}
        />
      ))}
    </div>
  );
}
