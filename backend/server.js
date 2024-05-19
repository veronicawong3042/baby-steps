const express = require('express');
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors');

const app = express();
const port = 3000;

const corsOptions = {
    origin: ["http://localhost:3001"],
};

// Middleware
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

const database = new sqlite3.Database("./db/database.sqlite");

//create table for api
database.run("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, answer TEXT, other1 TEXT, other2 TEXT, other3 TEXT)");

//get is getting whatever data that already exists
app.get('/questions', (req, res) => {
    //retrieve all users from the database
    database.all('SELECT * FROM questions', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json({
                rows
            });
        }
    });
});
// database.run('INSERT INTO questions (question, answer, other1, other2, other3) VALUES ("What color is carrot?", "orange", "blue", "green", "red")');
// database.run('INSERT INTO questions (question, answer, other1, other2, other3) VALUES ("Who is the prime minister of Canada?", "trudeau", "trump", "santa", "biden")');



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



