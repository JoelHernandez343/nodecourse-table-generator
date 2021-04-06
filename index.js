const { createFile } = require('./src/multiplication');
const argv = require('./src/yargs');

createFile(argv)
  .then(fileName => console.log(`${fileName} created!`))
  .catch(err => console.log(err));
