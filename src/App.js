import { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Cards from "./components/Cards";
import Tag from "./components/Tag";

function App() {
  // adds new property "tags" to each vacancy
  data.forEach((vacancy) => {
    vacancy.tags = [
      vacancy.role,
      ...vacancy.tools,
      vacancy.level,
      ...vacancy.languages,
    ];
  });

  // creates array of unique tags (CSS, JavaScript, Ruby....)
  let uniqueTags = [];
  for (let vacancy of data) {
    for (let tag of vacancy.tags) {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    }
  }

  const [clickedTags, setClickedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (!clickedTags.includes(tag)) {
      setClickedTags([...clickedTags, tag]);
    }
  };

  let vacancies = [];
  if (clickedTags.length === 0) {
    vacancies = data;
  } else {
    for (const vacancy of data) {
      for (const tag of vacancy.tags) {
        if (clickedTags.includes(tag)) {
          vacancies.push(vacancy);
          break;
        }
      }
    }

    // vacancies = vacancies.filter((vacancy) => {
    //   return (
    //     vacancy.tags.filter((tag) => {
    //       return clickedTags.includes(tag);
    //     }).length > 0
    //   );
    // });
  }

  console.log("tags", clickedTags);

  return (
    <div className="App">
      <ul className="all-tags">
        {uniqueTags.map((uniqueTag) => {
          return (
            <Tag
              enabled={clickedTags.includes(uniqueTag)}
              uniqueTag={uniqueTag}
              handleTagClick={handleTagClick}
            />
          );
        })}
      </ul>
      <Cards vacancies={vacancies} />
    </div>
  );
}

export default App;
