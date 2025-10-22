import { Component } from "react";

/**
 * Life Cycle Methods in Class Component
 * Mount --> Update --> Unmount
 */

// when a coponent is mounted (i.e first created in DOM), it runs only once
componentDidMount() {
  //   fetch data from an API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data.slice(0, 2)));
}

// it checks the nextProps ans current state and returns true or false
shouldComponentUpdate(nextProps, nextState) {
  return true;
}

// it runs when the component is updated
componentDidUpdate() {}

// it runs when the component is unmounted
// like we did in timer example like in useEffect
componentWillUnmount() {}

// it runs when the component is mounted 
componentDidMount() {}

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
