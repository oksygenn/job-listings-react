import Card from "./Card";

const Cards = ({ vacancies }) => {
  return (
    <div className="card-container">
      {vacancies.map((vacancy) => {
        return <Card vacancy={vacancy} key={vacancy.id} />;
      })}
    </div>
  );
};

export default Cards;
