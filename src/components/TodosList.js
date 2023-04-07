/** ****************************************
 * Project: react-todo-app
 * File: TodosList.js
 * Created: 4/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import TodoItem from "./TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  return (
    <div className={`row`}>
      <div className={`col`}>
        <ul className={`list-group p-2 m-2`}>
          {todosProps.map((todo) => (
            <TodoItem
              key={todo.id}
              itemProp={todo}
              handleChange={handleChange}
              delTodo={delTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodosList;
