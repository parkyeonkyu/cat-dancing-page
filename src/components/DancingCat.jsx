import React, { useState } from 'react';
import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

const DancingCat = () => {
  const [isDancing, setIsDancing] = useState(true);

  const toggleDancing = () => {
    setIsDancing(!isDancing);
  };

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <img 
          src={catSvg} 
          alt="Dancing Cat" 
          className={`dancing-cat ${isDancing ? 'dance' : ''}`}
        />
        <div className="stage-floor"></div>
      </div>
      
      <div className="controls">
        <button onClick={toggleDancing} className="control-button">
          {isDancing ? '일시정지' : '춤추기'}
        </button>
      </div>
      
      <div className="sparkles">
        <span className="sparkle sparkle-1">✨</span>
        <span className="sparkle sparkle-2">✨</span>
        <span className="sparkle sparkle-3">✨</span>
        <span className="sparkle sparkle-4">✨</span>
      </div>
    </div>
  );
};

export default DancingCat;