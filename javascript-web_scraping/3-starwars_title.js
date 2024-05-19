#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const endpoint = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(endpoint, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
