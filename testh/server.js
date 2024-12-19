const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5500;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "data"
});

connection.connect(error => {
    if (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
    console.log("Connected to MySQL database");
});

app.use(express.static("public"));

app.get("/attendance", (req, res) => {
    const query = "SELECT * FROM sdata ORDER BY Rollno";
    connection.query(query, (error, results) => {
        if (error) {
            console.error("Error executing query:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        print(results+"Hi");
         if (results.length === 0) {
              console.log(results)
              console.warn("No attendance data found");
              res.status(404).json({ message: "No attendance data found" });
              return;
         }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
