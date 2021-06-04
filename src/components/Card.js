import "../design/Card.css";

const Card = ({ vacancy, handleTagClick }) => {
  // const handleTagClick = (el) => {
  //   const test = vacancy.tags.filter((tag) => {
  //     return el.includes(tag);
  //   });

  //   console.log("my test " + test);
  //   setClickedTags(test);
  // };

  return (
    <div className={vacancy.featured ? "card featured-border" : "card"}>
      <section className="test1">
        <div className="card-logo">
          <img src={vacancy.logo} alt={`${vacancy.company} logo`} />
        </div>
        <div className="card-job-info">
          <ul className="card-company-info">
            <li>
              <h4>{vacancy.company}</h4>
            </li>
            {vacancy.new && (
              <li className="test3">
                <p className="card-new">NEW!</p>
              </li>
            )}
            {vacancy.featured && (
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
          {vacancy.tags.map((tag) => {
            return <li onClick={() => handleTagClick(tag)}>{tag}</li>;
          })}
          {/* <li>{vacancy.role}</li>
          <li>{vacancy.level}</li>
          {vacancy.languages.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
          {vacancy.tools.map((tool) => {
            return <li>{tool}</li>;
          })} */}
        </ul>
      </section>
    </div>
  );
};

export default Card;
