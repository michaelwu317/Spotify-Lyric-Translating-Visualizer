console.log("Hello World")

const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/web/front.html");
});

app.listen(8080, function() {
    console.log("Server is running on localhost8080")
});