const fs = require('fs');

const file = 'students.txt';
const name = '\nMaiko';
const encoding = 'utf-8';

fs.writeFile(file, name, encoding, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('successfully created file.');
  }
});

fs.readFile(file, encoding, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.appendFile(file, name, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('successfully updated file.');
  }
});

fs.unlink(file, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('successfully deleted file.');
  }
});
