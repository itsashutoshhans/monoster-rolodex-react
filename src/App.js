import { Component } from "react";
import "./App.css";

class App extends Component {
  // Available on all the class components, it is run first whenever this app is constructed built or instantiated
  constructor(props) {
    super();

    // react is looking for this inside constructor
    this.state = {
      monsters: [],
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
            return { monsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
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
