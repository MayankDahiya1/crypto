require("dotenv").config();
const express = require("express")
const ejs = require("ejs");
const app = express();
app.use(require("./routers/auth"));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.listen(process.env.PORT || 8080, function(err){
    console.log("Server Started on 8080");
});