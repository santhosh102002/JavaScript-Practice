const path = require('path');

// console.log('Sep ',path.sep)

// // console.log('process.env.path ',process.env.PATH)

// console.log(path.delimiter)

// const currentPath = __filename;

// console.log(currentPath)

const currentPath = __filename;

console.log(path.basename(currentPath));

console.log('baseNameWithoutExtension :',path.basename(currentPath,'.js'));

console.log('DirName :',path.dirname(currentPath))

console.log('Extension name :',path.extname(currentPath))

const pathToFile = path.format({
  dir: 'C:\\Users\SANTOSH KUMAR\OneDrive\Desktop\Node',
  base: 'index.js'
})

console.log(pathToFile)
console.log(path.isAbsolute(pathToFile))

console.log(path.isAbsolute('\index.js'))


console.log(path.join('C:\\','js','node','index.js'))
console.log('Parse >',path.parse(currentPath))

console.log(path.resolve())
console.log(__dirname)
console.log(__filename)

console.log(path.normalize('C:\\\home'))