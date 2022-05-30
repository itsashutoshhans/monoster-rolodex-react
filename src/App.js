import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // Available on all the class components, it is run first whenever this app is constructed built or instantiated
  constructor(props) {
    super();

    // react is looking for this inside constructor
    this.state = {
      name: 'Ashutosh'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello! {this.state.name}</p>
          <button>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
