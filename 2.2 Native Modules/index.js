const { isUtf8 } = require('buffer');
const fs= require('fs');
fs.writeFile('hello.txt', 'Hello from node!' , (err) => {
  if (err) {
   throw err;
  } else {
    console.log('File written successfully');
  }
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if(err){
        throw err;
    }
    console.log('File content:', data);
});