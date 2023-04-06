/** ****************************************
 * Project: react-todo-app
 * File: index.js
 * Created: 4/5/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import React from "react";
import ReactDOM from "react-dom/client";

import TodoApp from "./components/TodoApp";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
// ...
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);

