const options = {
  b: {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base of the multiplication table',
  },
  o: {
    alias: 'output',
    type: 'boolean',
    default: false,
    describe: 'Show output',
  },
  l: {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Upper limit',
  },
};

const check = (argv, options) => {
  if (isNaN(argv.b)) {
    throw '--base must be a number.';
  }

  return true;
};

module.exports = require('yargs').options(options).check(check).argv;
