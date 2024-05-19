#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (err, res, body) => {
  if (!err) {
    fs.writeFile(filePath, body, 'utf-8', (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
      }
    });
  }
});
