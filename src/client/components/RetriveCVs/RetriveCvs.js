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
          {item.profile_image_url} <br />
          {item.full_name}
          <br />
          {item.position}
          <br />
          {item.title}
          <br />
          {item.file_url}
          <br />
          {item.created_date}
          <br />
        </div>
      ))}
    </div>
  );
}

export default RetriveCvs;
