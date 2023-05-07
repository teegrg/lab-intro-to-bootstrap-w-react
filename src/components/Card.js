

import { useState } from 'react';

const Card = ({ title, location, content, image }) => {
  const [showFullContent, setShowFullContent] = useState(false);



  const handleButtonClick = () => {
    setShowFullContent(true);
  };

  return (
    <div className="card m-2">
      <div className="card-body">
        <img src={image} alt="city" />
        <h3>{title}</h3>
        <p>{location}</p>
        <p className="card-text text-tur">
          {showFullContent ? content : `${content.slice(0, 57)}...`}
        </p>
        {!showFullContent && (
          <button className="btn btn-warning" onClick={handleButtonClick}>
            Go to post 
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
