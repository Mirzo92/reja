console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");  
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Sessions code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");


//4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req);
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

app.get("/", function (req, res) {
    res.render("harid");
});



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running succesfully on port: ${PORT}`);
});







// const express = require('express');
// const app = express();
// const path = require('path');

// // Middleware to parse incoming requests with JSON payloads
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // POST route to handle form submission
// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     res.json({ test: "success" });
// });

// // GET route to render the "harid" page
// app.get("/", (req, res) => {
//     res.render("harid");
// });

// // Setting up the view engine (assuming you're using EJS)
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

