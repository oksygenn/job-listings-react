// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import vacancies from "./data/data.json";
import Card from "./components/Card";

function App() {
  vacancies.forEach((vacancy) => {
    vacancy.tags = [
      vacancy.role,
      ...vacancy.tools,
      vacancy.level,
      ...vacancy.languages,
    ];
  });

  const [clickedTags, setClickedTags] = useState([]);
  const [jobs, setJobs] = useState(vacancies);
  console.log("jobs yo", jobs);

  const addTagToFilter = (tag) => {
    const newClickedTags = [...clickedTags, tag];
    setClickedTags(newClickedTags);
    updateJobs(newClickedTags);
  };

  const updateJobs = (clickedTags) => {
    console.log(clickedTags);
    const j = vacancies.filter((vacancy) => {
      return (
        vacancy.tags.filter((tag) => {
          return clickedTags.includes(tag);
        }).length > 0
      );
    });
    console.log(j);
    setJobs(j);
  };


  // adds new property "tags" to vacancies object

  return (
    <div className="App">
      <div className="filtered-vacancies-container">
        <p>{clickedTags}</p>
      </div>
      <div className="card-container">
        {jobs.map((vacancy, index) => {
          return (
            <Card
              vacancy={vacancy}
              key={vacancy.id}
              // setClickedTags={setClickedTags}
              // setTags={setTags}
              // handleTagClick={(el) => {
              //   const test = vacancy.tags.filter((tag) => {
              //     return el.includes(tag);
              //   });

              //   console.log("my test " + test);
              //   setClickedTags(test);
              // }}
              handleTagClick={addTagToFilter}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
