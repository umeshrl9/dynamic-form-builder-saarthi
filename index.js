import express from "express";
import bodyParser from "body-parser";

const app = new express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});