import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const User = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    hashedPassword: String
})

module.exports = mongoose.models.User || mongoose.model('User', User);
