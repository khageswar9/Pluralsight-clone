const mongoose = require("mongoose");

module.exports = () =>{
    mongoose.connect(`mongodb+srv://${env.SECRET_KEY}@cluster0.wmplk.mongodb.net/npl?retryWrites=true&w=majority`);
};