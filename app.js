const express = require('express');

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./db/board.db', err => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log("Successful connection to the database 'board.db'");
// });

const app = express();
const bodyParser = require('body-parser');
const user = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/users', user);

// app.get('/t', (req, res) => {
//     const query = 'select * from post';
//     db.all(query, (err, rows) => {
//         if (err) {
//             throw err;
//         }
//         rows.forEach((row) => {
//             console.log(row);
//             res.json(row);
//         });
//     });
// });

/*
db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Close the database connection.');
    }
});
*/

module.exports = app;
