import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todos/Todo'

// Follow the model under 'Rendering the component for tests'
// in Part 5 material: https://fullstackopen.com/en/part5/testing_react_apps

test('Todo component is rendered on screen', () => {
  const todoObj = {
    text: "Brush my teeth in the evening",
    done: true
  }

  const dummyFunc = () => {
    console.log('hello')
  }

  render(<Todo todo={todoObj} deleteTodo={dummyFunc} completeTodo={dummyFunc} />)

  const elem = screen.getByText('Brush my teeth in the evening')
  expect(elem).toBeDefined()
})