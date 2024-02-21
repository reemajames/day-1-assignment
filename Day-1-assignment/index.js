const fs = require('fs');

//create and write to a file
fs.writeFileSync('./testfile', 'this is a new file');

//read the file
const file_content = fs.readFileSync('./testfile').toString();
console.log(file_content);

//update the file
fs.appendFileSync('./testfile', " this is updated file content");

const updated_file_content = fs.readFileSync('./testfile').toString();
console.log(updated_file_content);

//delete the file
fs.unlinkSync('./deletefile');

