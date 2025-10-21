import { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class InputField extends Component {
  state = {
    name: "karuna",
    count: 0,
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.name}
          placeholder="Enter your name"
          onChange={this.handleChange}
        />
        <div>
          <button onClick={this.handleClick}>
            Click Me {this.state.count} times
          </button>
        </div>
        <h3>Hii, {this.state.name}!</h3>
      </div>
    );
  }
}

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h3>Class Component`</h3>
        <Welcome name="John" />
        <InputField />
      </div>
    );
  }
}
export default ClassComponent;
