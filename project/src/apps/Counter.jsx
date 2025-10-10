import { useState, useEffect } from "react";
import axios from "axios";
const Counter = () => {
  const [count, setCount] = useState(0);

  //   when the dependency array is empty, it runs only once when the component is mounted (when it is first rendered)
  useEffect(() => {
    console.log("Component Mounted");
    // ex
    // fetch data from an API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data.slice(0, 2)));
  }, []);

  //   using axios
  // axios is a promise based library
  // difference between fetch and axios
  // fetch need to convert the response to json using response.json()
  // axios automatically converts the response to json
  // axios has better error handling
  const getData = async (URL) => {
    try {
      const res = await axios.get(URL);
      console.log(res.data.slice(0, 2));
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  };
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/comments";
    getData(URL);
  }, []);

  // when the dependency array has a value, it runs only when that value changes
  useEffect(() => {
    console.log("Component Updated!");
  }, [count]);

  // when there is no dependency array, it runs on every render
  useEffect(() => {
    console.log("Component Rendered!");
  });
  return (
    <>
      <h2>Counter</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Count : {count}</p>
    </>
  );
};

export default Counter;
