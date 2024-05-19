#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (err, res, body) => {
  if (!err) {
    const todos = JSON.parse(body);
    const completedTasksByUser = {};
    todos.forEach(todo => {
      if (todo.completed) {
        if (!completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId] = 0;
        }
        completedTasksByUser[todo.userId] += 1;
      }
    });
    console.log(completedTasksByUser);
  }
});
