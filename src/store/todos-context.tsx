import React from "react";
import ToDo from "../models/todo";
import { useState } from "react";

type TodosContextObject = {
  items: ToDo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  children: {};
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
  children:{},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new ToDo(todoText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  const contextReturn: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    children: {}
  };

  return (
    <TodosContext.Provider value={contextReturn}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
