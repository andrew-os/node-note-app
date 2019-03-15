// var obj = {
//     name: 'Andrew'
// }
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew", "age": 28}';
// var person = JSON.parse(personString);

// console.log(typeof person, person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
}
//original Note String return value of json stringify
var originalNoteString = JSON.stringify(originalNote);
//f1st arg file to save 2nd is where to take data from
fs.writeFileSync('notes.json', originalNoteString);

//gets text content from file
var noteString = fs.readFileSync('notes.json');
//note (obj) takes string converts pack to obj
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);