const fs = require('fs');
// const filesize = require("filesize");
const request = require('request');
const url = process.argv[2];
const localPath = process.argv[3];

// const {size} = fs.statSync('http://www.example.edu');

// console.log(size);
request(url, (error, response, body) => {
  // const {size} = fs.statSync('http://www.example.edu');
  console.error('error:', error); // Print the error if one occurred
  if (error) { //we only need the error, typically we get null which is falsey
    //we can denote error if we want
  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  if (!body) {
    console.log('body is not (!)');
    return;
  }
  fs.writeFile(localPath, body, error => {
    if (!error) {
      // body.length here is returning the number of characters. one character is 8 bytes
      console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
    } else {
      console.log('File failed to write');
    }
  });
});