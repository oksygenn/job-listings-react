import "../design/Card.css";

const Card = ({ vacancy }) => {
  return (
    <div className={vacancy.featured ? "card featured-border" : "card"}>
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
                <p className="card-new">NEW!</p>
              </li>
            )}
            {vacancy.new && (
              <li>
                <p className="card-featured">FEATURED</p>
              </li>
            )}
          </ul>
          <h4>{vacancy.position}</h4>
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
