#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    films.forEach(films => {
      films.characters.forEach(characters => {
        if (characters.includes('18')) count += 1;
      });
    });
    console.log(count);
  }
});
