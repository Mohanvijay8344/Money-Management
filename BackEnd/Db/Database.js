const mongoose = require('mongoose');

const db = async() => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db is Connected")
    }
    catch (error) {
        console.log("Db Connection is Error")
    }
}
module.exports = {db}

