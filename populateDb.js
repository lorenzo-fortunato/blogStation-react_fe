const falso = require('@ngneat/falso');

const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3306',
    database: 'blogstation_db'
});

const app = express();

app.use(express.json());

// populate db blogs table
for(let i = 0; i <= 10; i++) {
    const dataPopulate = {
        title: falso.randText({ charCount: 20 }),
        body: falso.randLine({ lineCount: 100 }),
        author: 'mario'
    }

    const sqlPopulate = 'INSERT INTO blogs SET ?'
    db.query(sqlPopulate, dataPopulate, (err, result) => {
        if (err) {
            console.log('Error in inserting data');
        } else {
            console.log('Data succesfully inserted');
        };
    });
}