// index.js

// fs is a built-in module that includes a lot of functions for reading and writing files
const fs = require('fs');
const express = require('express');
const app = express();
const coronaData = require('./coronaData.json');
const activities = require('./activities.json');

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.get("/", function(req, res) {
//     res.send(coronaData);
// });

app.get("/", function(req, res) {
    console.log("__dirname: ", __dirname);
    res.sendFile(__dirname + '/index.html');
});

app.post("/autumn", function(req, res) {
    console.log("POSTリクエストの確認");
    console.log("req: ", req.body);
    fs.writeFile(__dirname + "/data.txt",
                req.body.activity, function() {
                    res.send("ファイルへ書き込みました");
                });
});

app.post("/update", function(req, res) {
    console.log(activities);
    console.log(activities[0].activity);
    activities[0].activity = req.body.updatedActivity;
    res.send(activities);
});

app.post("/delete", function(req,res) {
    console.log(req.body);
    activities.splice(req.body.index, 1);
    res.send(activities);
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log(`Server is running on ${port}`);
});