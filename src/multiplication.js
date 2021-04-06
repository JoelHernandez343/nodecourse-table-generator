const fs = require('fs');
const colors = require('colors/safe');

const makeTable = ({ base, limit = 10 }) => {
  const table = [];

  for (let i = 0; i < limit; ++i) {
    table.push([base, i + 1, base * (i + 1)]);
  }

  return table;
};

const tableToString = table =>
  table.reduce(
    (ans, row) => (ans += `${row[0]} x ${row[1]} = ${row[2]}\n`),
    ''
  );

const colorTable = table =>
  table.forEach(row =>
    console.log(
      `${colors.green(row[0])} ${colors.red('x')} ${colors.blue(
        row[1]
      )} = ${colors.yellow(row[2])}`
    )
  );

const createFile = async ({ base, limit = 10, output = false }) => {
  if (!fs.existsSync('./output/')) {
    fs.mkdirSync('./output/');
  }

  const fileName = `output/table-${base}.txt`;
  const table = makeTable({ base, limit });

  if (output) {
    colorTable(table);
  }

  fs.writeFileSync(fileName, tableToString(table));

  return fileName;
};

module.exports = {
  createFile,
};
