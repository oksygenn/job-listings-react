// import logo from "./logo.svg";
import "./App.css";
import vacancies from "./data/data.json";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        {vacancies.map((vacancy) => {
          return <Card vacancy={vacancy} key={vacancy.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
