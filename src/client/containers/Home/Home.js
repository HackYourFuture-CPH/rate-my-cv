import React, { useEffect, useState } from 'react';
import HomepageSlogan from '../../components/Home/HomepageSlogan';
import { InstructionsComponent } from '../../components/InstructionsComponent/InstructionsComponent';
import TitleDesc from '../../components/Title/TitleDesc';
import image1 from '../../assets/images/img-1.png';
import image2 from '../../assets/images/img-2.png';
import Button from '../../components/Button/Button';
import { CvcardList } from '../../components/CvcardListSearch/CvcardList';
import { useHistory } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/usercv');
      const result = await res.json();
      setCvs(result);
    })();
  }, []);

  const history = useHistory();
  const allResumes = () => {
    history.push('/dashboard');
  };

  return (
    <div className="homepage-container">
      <div className="homepageslogan">
        <HomepageSlogan />
      </div>
      <div className="instruction">
        <InstructionsComponent />
      </div>
      <div className="write-resume gray-background">
        <TitleDesc
          title="Write your Resume"
          description={`Amet minim mollit non deserunt ullamco est sit allque
          dolor do amet sint. Velit officia consequat duls enim 
          velit mollit. Exercitation veniam consequat sunt nostrud amet`}
        />
        <img src={image1} alt="right" />
      </div>
      <div className="write-resume">
        <img src={image2} alt="left" />
        <TitleDesc
          title="Review Resumes"
          description={`Amet minim mollit non deserunt ullamco est sit allque  
          dolor do amet sint. Velit officia consequat duls enim 
          velit mollit. Exercitation veniam consequat sunt nostrud amet`}
        />
      </div>
      <div className="uploaded-cvs">
        <CvcardList title="Latest uploaded resumes" cvs={cvs.slice(-3)} />
        <Button
          buttonName="See all uploaded resumes"
          style={{ backgroundColor: '#F25B06' }}
          onClick={allResumes}
        />
      </div>
    </div>
  );
};
