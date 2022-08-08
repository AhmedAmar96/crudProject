const mongoose = require("mongoose");

const dbConnection = async ()=>{
    mongoose.connect("mongodb://localhost:27017/mySoical")
    .then((result)=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log("error connecting");
    })
}

module.exports = dbConnection;