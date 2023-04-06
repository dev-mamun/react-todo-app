/** ****************************************
 * Project: react-todo-app
 * File: TodoApp.js
 * Created: 4/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import Header from "./Header";
import TodosLogic from "./TodosLogic";

const TodoApp = () => {
  return (
    <>
      <Header />
      <TodosLogic />
    </>
  );
};
export default TodoApp;
