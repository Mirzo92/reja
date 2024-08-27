console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");  
const app = express();
const fs = require("fs");

// MongoDB connect
const db = require("./server").db(); //CRUD operationni ishlatishga yordam beradi
const mongodb = require("mongodb");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

//1 Kirish code
app.use(express.static("public")); //Reja ejs hamma malumotlarni static folderdan oladi
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Sessions code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");


//4 Routing code
app.post("/create-item", (req, res) => {
    // console.log(req);
    // res.json({ test: "success" });
    console.log("user entered /create-item");// step-B  Backendga kirish
    const new_reja = req.body.reja; //console.log(STEP C: DB ga malumot yozishga harakat boshlaymiz)
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => { //database dagi manba
        console.log(data.ops);// STEP-D: DB dan yoizlgan malumot oldik
        //console.log Step-e: Frontendga json formatda malumot yubormiz
        res.json(data.ops[0]);
    });
});


// calback function
app.post("/delete-item", (req, res) => {
  const id = req.body.id; // front enddan yuborgan id ni constanta id variablega tenglab olyabmiz
  console.log(id); // koryapmiz
 db.collection("plans") // db dagi plan degan collection
 .deleteOne({_id: new mongodb.ObjectId(id)}, function() {
    res.json({ state: "success" }) //backenddan success front endga yuboryapmiz
 })
});

app.post("/edit-item", (req, res) => {
    const data = req.body; // kelgan requestni dataga tenglab olyapmiz
    console.log(data); 
    db.collection("plans").findOneAndUpdate(
      { _id: new mongodb.ObjectId(data.id) }, 
      { $set: {reja: data.new_input} }, //reja nomi bn data: newinput
      function () {
        res.json({state: "success"}); // ozgartirib bolgandan keyin, front endga success xabar yuboryapmiz
      }
    );
});



app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) { // true qiymat bn kelsa, pastdagi ifni ichidagi shartlarimiz ishlaydi
        db.collection("plans").deleteMany(function () {
            res.json({state: "hamma rejalar ochirildi" }) // db hammasini ocirib bolgandan keyin, state ni front endga yuboradi
        });
    }
});

// app.get("/author", (req, res) => {
//     res.render("author", {user: user});
// })

app.get("/", function (req, res) {
    console.log("user entered /");
    // console log(STEP:- A backendga kirib keldi)
 
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data}); // reja ejsga items nomi ostida data kiritdik
        }
    })
    
});

module.exports = app;










 
 