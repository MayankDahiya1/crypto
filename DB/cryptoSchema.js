const mongoose = require("mongoose");
mongoose.connect(process.env.DB, {useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log("DB Connection Succesfully");
}).catch((err)=>{
    console.log("No connection Established");
});
const cryptoSchema = new mongoose.Schema({
number: Number,
name : String,
last : Number,
buy : Number,
sell : Number,
volume : Number,
base_unit : String
});
module.exports = cryptoSchema;