/** ****************************************
 * Project: react-todo-app
 * File: TodoItem.js
 * Created: 4/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
const TodoItem = ({ itemProp, handleChange, delTodo }) => {

  return (
    <li className={`list-group-item d-flex justify-content-start align-items-center`}>
      <input
        className={`form-check-input m-0`}
        type="checkbox"
        id={itemProp.id}
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <label
        className={`form-check-label d-flex justify-content-center align-items-center m-2`}
        htmlFor={itemProp.id}>
        {itemProp.title}
      </label>
      <button
        className={`btn btn-danger btn-sm`}
        onClick={() => delTodo(itemProp.id)}>
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
