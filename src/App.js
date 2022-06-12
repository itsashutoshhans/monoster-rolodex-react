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
          <button onClick={() => {
            // react detects change by using javascript's underlying reference by memory for an object
            // essentialy if we change this.state = 'some value', it still points to the same reference and react doesn't think it as a change
            // that means there should be a different object altogether - ex. Object.assign
            // setState is the answer, it shallow merges the current state
            this.setState({name: 'Vishal'})
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
