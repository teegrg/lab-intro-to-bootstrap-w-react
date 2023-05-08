import { useState } from 'react';
import images from "../images/index"

const Card = ({data}) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const pic = data.location.split(" ").join("-").toLowerCase()



  const handleButtonClick = () => {
    setShowFullContent(true);
  };

  return (
    <div className="card m-2">
      <div className="card-body">
        <img 
        src={images[pic]} className="card-img-top img-fluid object-fit-cover post-image-height"
        alt="city" />
        <h3>{data.title}</h3>
        <p>{data.location}</p>
        <p className="card-text text-tur">
          {showFullContent ? data.content : `${data.content.slice(0, 57)}...`}
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
