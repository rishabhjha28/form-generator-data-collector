const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.set('strictQuery', false)
mongoose.connect(db).then(() => {
    console.log("conection with db successfull");
}).catch((err) => {
    console.log(err);
});