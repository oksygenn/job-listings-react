const Card = ({ vacancy }) => {
  return (
    <div className="card">
      <div className="card-logo">
        <img src={vacancy.logo} alt={`${vacancy.company} logo`} />
      </div>
      <div className="card-vacancy-info">
        <h4>{vacancy.company}</h4>
        <h3>{vacancy.position}</h3>
        <ul>
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
  );
};

export default Card;
