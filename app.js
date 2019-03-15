const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');
const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  descibe: 'Body of the note',
  demand: true,
  alias: 'b'
}

const argv = yargs.command('add', 'Add a new Note', {
  title: titleOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title: titleOptions,
  body: bodyOptions,
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help().argv;
var command = process.argv[2];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note Created");
    notes.logNote(note);
  } else {
    console.log("Note Title taken");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.readNote(argv.title);
  if (note) {
    console.log("Note Found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
  //title
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    //condition " truth : false"
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
  console.log('Command not recognized');
}
