import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Belajar React!", isCompleted: false },
    { text: "Belajar React Hooks!", isCompleted: false },
    { text: "Belajar styling di React!", isCompleted: false }
  ]);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Todos tidak boleh lebih dari 10!");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => setTodos([]);
  const [showAdd, setShowAdd] = useState(false);

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />

      <TodoForm addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
