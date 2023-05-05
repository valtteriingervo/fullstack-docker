const express = require('express');
const { Todo } = require('../mongo')
const { getAsync, setAsync } = require('../redis/index')
const router = express.Router();

// This should probably be in a single place
// We'll optimize it later if need be
const todoCounterKey = 'todo_counter_key'

/* GET added todos counter. */
router.get('/', async (_, res) => {
  let todosCounter = await getAsync(todoCounterKey)
  if (!todosCounter) {
    todosCounter = 0
  }
  const todosCounterObject = {
    added_todos: todosCounter
  }
  res.send(todosCounterObject);
});

module.exports = router;
