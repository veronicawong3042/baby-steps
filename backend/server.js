const port = 3000;

function start() {
    const express = require('express');
    const sqlite3 = require('sqlite3').verbose();

    const app = express();

    const database = new sqlite3.Database("./db/database.sqlite");

    //create table for api
    database.run("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, answer TEXT, score INTEGER)");

    //get is getting whatever data that already exists
    app.get('/questions', (req, res) => {
        //retrieve all users from the database
        database.all('SELECT * FROM questions', (err, rows) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.send(rows);
            }
        });
    });

    app.post('/questions', (req, res) => {
        database.run('INSERT INTO questions (question, answer, score) VALUES ("What is life", "forty-two", 30)');
        res.send("okay");
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
start();


