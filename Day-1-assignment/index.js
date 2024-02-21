const fs = require('fs');

//create and write to a file
function createFile(){
fs.writeFileSync('./testfile', 'this is a new file');
}

//read the file
function readFile(){
const file_content = fs.readFileSync('./testfile').toString();
console.log(file_content);
}

//update the file
function updateFile(){
fs.appendFileSync('./testfile', " this is updated file content");
const updated_file_content = fs.readFileSync('./testfile').toString();
console.log(updated_file_content);
}

//delete the file
function deleteFile(){
fs.unlinkSync('./deletefile');
}

createFile();
readFile();
updateFile();
deleteFile();

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile
}