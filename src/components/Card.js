import "../design/Card.css";

const Card = ({ vacancy }) => {
  return (
    <div className="card">
      <section className="test1">
        <div className="card-logo">
          <img src={vacancy.logo} alt={`${vacancy.company} logo`} />
        </div>
        <div className="card-job-info">
          <ul className="card-company-info">
            <li class="test2">
              <h4>{vacancy.company}</h4>
            </li>
            {vacancy.new && (
              <li>
                <p className="card-new">New!</p>
              </li>
            )}
            {vacancy.new && (
              <li>
                <p className="card-featured">Featured</p>
              </li>
            )}
          </ul>
          <h3>{vacancy.position}</h3>
          <ul className="card-vacancy-info">
            <li>{vacancy.postedAt}</li>
            <li>{vacancy.contract}</li>
            <li>{vacancy.location}</li>
          </ul>
        </div>
      </section>
      <section>
        <ul className="card-vacancy-requirements">
          <li>{vacancy.role}</li>
          {vacancy.languages.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Card;
