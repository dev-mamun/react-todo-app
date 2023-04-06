/** ****************************************
 * Project: react-todo-app
 * File: TodoItem.js
 * Created: 4/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
const TodoItem = ({ itemProp, handleChange, delTodo }) => {

  return <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    <button onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
  </li>;
};
export default TodoItem;
