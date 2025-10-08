import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onTodoInputChange = (e) => {
    setTodo(e.target.value);
  };

  const onAddTodoClick = () => {
    if (!todo.trim()) return;
    setTodoList([...todoList, { id: uuid(), todo: todo, done: false }]);
    console.log(todoList);
    setTodo("");
  };

  const onDeleteClick = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const onDoneChange = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };
  return (
    <>
      <h1>My wish list</h1>
      <input
        value={todo}
        onChange={onTodoInputChange}
        type="text"
        placeholder="Enter todo"
      />
      <button onClick={onAddTodoClick}>Add</button>
      {todoList.length === 0 && <p>No wishes yet. Add one!</p>}

      {todoList &&
        todoList.length > 0 &&
        todoList.map((todo) => {
          return (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => {
                    onDoneChange(todo.id);
                  }}
                />
                <span className={todo.done ? "strike-through" : ""}>
                  {todo.todo}
                </span>
              </label>
              <button
                onClick={() => {
                  onDeleteClick(todo.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}

export default App;
