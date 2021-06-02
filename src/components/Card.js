import "../design/Card.css";

const Card = ({ vacancy }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-logo">
          <img src={vacancy.logo} alt={`${vacancy.company} logo`} />
        </div>
        <div className="card-job-info">
          <div className="card-company-info">
            <h4>{vacancy.company}</h4>
            {vacancy.new && <p>New!</p>}
            {vacancy.new && <p>Featured</p>}
          </div>
          <h3>{vacancy.position}</h3>
          <ul className="card-vacancy-info">
            <li>{vacancy.postedAt}</li>
            <li>{vacancy.contract}</li>
            <li>{vacancy.location}</li>
          </ul>
        </div>
        <ul className="card-vacancy-requirements">
          <li>{vacancy.role}</li>
          {vacancy.languages.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
