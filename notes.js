const fs = require('fs');


var fetchNotes = () => {
//use try/catch in case of notes-data.json not existing
	try {
		//returns contents of path
		var noteString = fs.readFileSync('notes-data.json');
		//make string for readFile an object
		return JSON.parse(noteString);
		} catch (error) {
		//if fails return empty array
		return [];
		}
}

var saveNotes = (notes) => {
	//update and save file 
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	//make sure title has unique title
	var duplicateNotes = notes.filter((note) => note.title === title);
	if (duplicateNotes.length === 0){
		//push in item that gets addes to end of array
		notes.push(note);
		saveNotes(notes);
		return note;
		
	}
};


var getAll = () => {
	return fetchNotes();
}
var readNote =( title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];
}
var removeNote = (title) => {
	//fetch notes
	var notes = fetchNotes();
	//filter notes from array using title arg
	var deleteNote = notes.filter((note) => note.title !== title);
	//save new notes array
	saveNotes(deleteNote);

	//compare lengths of array to check if note was removed
	return notes.length !== deleteNote.length;
}

var logNote = (note) => {
	//break on this line and use repl to output
	debugger;
	// use read command with --title
	console.log('---');
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}
module.exports = { addNote, getAll, readNote, removeNote, logNote};