const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());

// Endpoint to execute command
app.post('/execute-command', (req, res) => {
    const command = req.body.command;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Failed to execute command');
            return;
        }
        res.send('Command executed successfully');
    });
});


// Allow CORS to accept requests from any origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 5500');
});
