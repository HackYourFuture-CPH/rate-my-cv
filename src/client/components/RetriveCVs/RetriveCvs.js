import React, { useState, useEffect } from 'react';

function RetriveCvs() {
  const [cvs, setCvs] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetch('/api/cv').then((res) => res.json());
      console.log(result);
      setCvs(result);
    })();
  }, []);

  return (
    <div>
      {cvs?.map((item) => (
        <div>
          {item.profile_image_url}
          {item.full_name}
          {item.position}
          {item.title}
          {item.file_url}
          {item.created_date}
        </div>
      ))}
    </div>
  );
}

export default RetriveCvs;
