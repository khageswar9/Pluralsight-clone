const mongoose = require("mongoose");

module.exports = () =>{
    mongoose.connect("mongodb+srv://virajgupta:Virajgupta12345@cluster0.wmplk.mongodb.net/npl?retryWrites=true&w=majority");
};