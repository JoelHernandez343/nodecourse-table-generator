# Node.js table generator
This is an easy and simple multiplication table generator.

I play with `yargs` and `colors`, npm's packages.

## Usage
npm packages installation:
```bash
npm i
```

Commands:
```bash
node index --help               
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Base of the multiplication table            [number] [required]
  -o, --output   Show output                          [boolean] [default: false]
  -l, --limit    Upper limit                              [number] [default: 10]
```

## Examples
```bash
node index --base 3 -o --limit 5

# console output
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
output/table-3.txt created!

# output/table-3.txt
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
```

