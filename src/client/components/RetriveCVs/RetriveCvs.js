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
          {item.title}
          {item.description}
        </div>
      ))}
    </div>
  );
}

export default RetriveCvs;
