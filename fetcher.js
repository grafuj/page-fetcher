const fs = require('fs');



const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

//example message
// Downloaded and saved 3261 bytes to ./index.html