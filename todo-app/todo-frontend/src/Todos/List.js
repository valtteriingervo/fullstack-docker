import React from 'react'
import { v1 as uuidv1 } from 'uuid';
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {todos.map(todo => {
        return <Todo key={todo.text} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      }).reduce((acc, cur) => [...acc, <hr key={uuidv1()} />, cur], [])}
    </>
  )
}

export default TodoList
