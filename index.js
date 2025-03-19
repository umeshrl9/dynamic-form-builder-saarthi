import express from "express";
import bodyParser from "body-parser";

const app = new express();
const port = 3000;

let formElements = [];
var q = 0;

app.get("/", (req, res) => {
    res.render("index.ejs", {fe: formElements});
})

app.get("/addtextbox", (req, res) => {
    q++;
    const ques = prompt("Enter textbox question!");
    formElements.push({type: "text", question: q});
    res.redirect("/");
})

app.get("/addmcq", (req, res) => {
    q++;
    const no = prompt("Enter number of options");
    var allOptions = [];
    for(var i=no; i>= 1; i--){
        allOptions.push(prompt("Enter option"));
    }
    formElements.push({type: "mcq", question: q, options: allOptions});
})

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});