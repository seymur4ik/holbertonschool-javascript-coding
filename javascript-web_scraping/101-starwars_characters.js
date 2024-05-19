#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const movieEndpoint = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(movieEndpoint, (err, res, body) => {
  if (!err) {
    const movie = JSON.parse(body);
    const charEndpoint = movie.characters;
    const characters = [];
    let completedRequests = 0;

    charEndpoint.forEach((char, index) => {
      request(char, (err, res, body) => {
        if (!err) {
          const character = JSON.parse(body);
          characters[index] = character.name;
        }
        completedRequests++;

        if (completedRequests === charEndpoint.length) {
          characters.forEach(name => console.log(name));
        }
      });
    });
  }
});
