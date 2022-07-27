import { Component } from "react";
import "./App.css";

class App extends Component {
  // Available on all the class components, it is run first whenever this app is constructed built or instantiated
  constructor(props) {
    super();

    // react is looking for this inside constructor
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 123,
        },
        {
          name: 'Frank',
          id: 1232,
        },
        {
          name: 'Jacky',
          id: 1236,
        }
      ]
    };
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
