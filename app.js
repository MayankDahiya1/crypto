require("dotenv").config();
const express = require("express")
const ejs = require("ejs");
const app = express();
app.use(require("./routers/auth"));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const PORT = process.env.PORT;
app.listen(PORT, function(err){
    console.log("Server Started on 3000");
});