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
database.run("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, answer TEXT)");

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

app.post('/questions', (req, res) => {
    database.run('INSERT INTO questions (question, answer) VALUES ("Which of the following statements about ovulation and fertility tracking is correct?", "Tracking ovulation methods include basal body temperature charting, ovulation predictor kits, and monitoring cervical mucus changes.")');
    database.run('INSERT INTO questions (question, answer) VALUES ("What are the initial signs and symptoms of pregnancy?", "Early signs and symptoms of pregnancy may include missed periods, breast tenderness, nausea (morning sickness), fatigue, frequent urination, and heightened sense of smell.")');
    res.send("successfully added questions!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



