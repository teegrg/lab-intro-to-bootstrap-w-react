

const Card = ({ title, location, content, image }) => {

  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt="city" />
        <h3>{title}</h3>
        <p>{location}</p>
        <p className="card-text">{content}</p>
        <button className="btn btn-warning">Go to post</button>
      </div>
    </div>

  )
}

export default Card;
