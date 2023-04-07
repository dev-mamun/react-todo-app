/** ****************************************
 * Project: react-todo-app
 * File: InputTodo.js
 * Created: 4/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <div className={`row m-1 d-flex justify-content-center align-items-center`}>
      <div className={`col`}>
        <form
          className={`row g-3`}
          onSubmit={handleSubmit}
        >
          <div className={`col-10`}>
            <input
              className={`form-control form-control-md`}
              type="text"
              placeholder="Add Todo..."
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className={`col-auto`}>
            <button
              className={`btn btn-success btn-md`}
            >
              Submit
            </button>
          </div>
        </form>
        <span>{message}</span>
      </div>
    </div>
  );
};
export default InputTodo;
