import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

export default function TodoList() {
  const todos = useSelector(state => state.todos.value);

  return (
    <div>
      <h1>Todo</h1>
      <NewTodoForm />
      <h3>Completed:</h3>
      {todos.filter(t => t.isCompleted).map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Incomplete:</h3>
      {todos.filter(t => !t.isCompleted).map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  )
}