const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5500;

// Serve the static files (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to serve op.txt file
app.get('/op.txt', (req, res) => {
    const filePath = path.join(__dirname, 'op.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        res.send(data);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
