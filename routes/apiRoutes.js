const fs = require('fs');
const noteData = require('../data/noteData');

const data = fs.readFileSync('./db/db.json', 'utf8');
const notes = JSON.parse(data);

for (i = 0; i < notes.length; i++) {
    notes[i].id = '' + i;
};

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });
    
    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(noteData), 'utf8');
        res.json(notes);
    });
};