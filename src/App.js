import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  // comes under useEffect to prevent re creation of fileterd monsters because of other side effects and improve performance
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    // this anonymous function is problematic because with every render it is thrown away and recreated
    // every time we are re initializing it we are making our app less perfomant
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="App">
      {/* input looks like the html but it is a react component inside, because react allows us to bind functionality with the UI - also same goes with html properties or attributes */}
      {/* <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        /> */}
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
