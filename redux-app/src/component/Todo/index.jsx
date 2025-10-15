import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../slice/todoSlice";
import { v4 as uuid } from "uuid";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);
  //   console.log(state);
  const handleAddTodo = () => {
    dispatch(addTodo({ id: uuid(), todo: todo, done: false }));
    setTodo("");
  };
  return (
    <>
      <div>
        <h1>Todo</h1>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="enter todo"
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <div>
        {state.length > 0
          ? state.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => {
                      dispatch(updateTodo({ id: item.id, done: !item.done }));
                    }}
                  />
                  {item.todo}
                  <button
                    onClick={() => {
                      dispatch(deleteTodo({ id: item.id }));
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          : "Add your Wishlist!"}
      </div>
    </>
  );
};

export default Todo;
