const mongoose = require('mongoose');



const connectDB = async () => {
    
    try {
        await mongoose.connect("mongodb+srv://ecommerce-user:IWs4YsAVhuByETYh@ecommerce-mern.o5x8r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database Connection Success');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;