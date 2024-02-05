const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3306',
    database: 'blogstation_db'
});

const app = express();

app.use(express.json());

// login
app.post('/login', (req, res) => {
    const { user, password } = req.body;

    if (!user || !password ) {
        return res.status(400).send('Insert valid user and password');
    }

    const sql = 'SELECT * FROM users WHERE user = ? AND password = ?';
    
    db.query(sql, [user, password], (err, result) => {
        if (err) {
            return res.status(500).send('Server error');
        };
    
        if (result.length > 0) {
            const token = jwt.sign({ user }, 'secret', { expiresIn: '1h'});
            return res.status(200).send({ token })
        } else {
            return res.status(401).send('Invalid credentials');
        };
    
    });
});

 // get
app.get('/blogs', (req, res) => {
    const sqlAllBlogs = 'SELECT * FROM blogs';

    db.query(sqlAllBlogs, (err, result) => {
        if (err) {
            return res.status(500).send('Server error');
        };
    
        return res.status(200).send(result);
    });
});

// get by id
const getDataById = (id, callback) => {
    const sqlBlogById = 'SELECT * FROM blogs WHERE id = ?';

    db.query(sqlBlogById, [id], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        };
    });
};

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    getDataById(id, (err, data) => {
        if (err) {
            req.status(500).send('Server error');
        } else {
            console.log(data);
            res.status(200).send(data);
        };
    });
});

// delete by id
app.delete('/blogs/:id', (req, res) => {
    const sqlDeletById = 'DELETE FROM blogs WHERE id = ?';
    const id = req.params.id;
    db.query(sqlDeletById, [id], (err, result) => {
        if (err) {
            req.status(500).send('Server error');
        };
        return res.status(200).send(result);
    })
})

// create
app.post('/blogs/add', (req, res) => {
    const { title, body, author } = req.body;

    if (!title || !body || !author) {
        res.status(400).send('Please enter title, body and author');
    } else {
        const dataToSend = {
            title: title,
            body: body,
            author: author
        };
        const sqlCreate = 'INSERT INTO blogs SET ?';

        db.query(sqlCreate, dataToSend, (err, result) => {
            if (err) {
                req.status(500).send('Error in inserting data');
            } else {
                res.status(201).send('Data succesfully inserted');
            };
        });
    };
});

app.listen(8080, () => { console.log('Server in ascolto sulla porta 8080'); });
