import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 5
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Member");
  };

  increase = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>

        <h2>{this.state.count}</h2>

        <button onClick={this.increase}>
          Increment
        </button>

        <br />

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <br />

        <button onClick={this.handleClick}>
          Click on me
        </button>

        <br />
        <br />

        <CurrencyConvertor />

      </div>
    );
  }
}

export default App;