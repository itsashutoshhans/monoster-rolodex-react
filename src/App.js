import { Component } from "react";
import "./App.css";

class App extends Component {
  // Available on all the class components, it is run first whenever this app is constructed built or instantiated
  constructor(props) {
    super();

    // react is looking for this inside constructor
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    // Mounting is - the first time the component gets placed onto the DOM
    // OR The first time react renders the component onto the page
    // Only happens once in the component lifecycle
    // remount only happens after unmount

    // api calls are placed here
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, filteredMonsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  onSearchChange = (event) => {
    // this anonymous function is problematic because with every render it is thrown away and recreated
    // every time we are re initializing it we are making our app less perfomant
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    // destructuring - makes it readable 
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        {/* input looks like the html but it is a react component inside, because react allows us to bind functionality with the UI - also same goes with html properties or attributes */}
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => (
          // should have a key property - some unique value(most of the time it would be id)
          // key is used by react to optimise rerendering
          // it differentiates different elements
          // such that it identifies uniquely if something is changed
          // so that only that particular html element is rerendered
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
