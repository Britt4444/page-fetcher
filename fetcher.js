const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];


request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (!error && response.statusCode === 200) {
    fs.writeFile(filePath, body, err => {
      if (err) {
        throw err;
      } else {
        const fileSize = fs.statSync(filePath).size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
      }
    });
  }
});

/*
It should download the resource at the URL to the local path on your machine.
Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/
