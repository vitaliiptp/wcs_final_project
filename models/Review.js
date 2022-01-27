import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const Review = new Schema({
    title: String,
    category: String,
    upvotes: Number,
    status: String,
    description: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" }
})

module.exports = mongoose.models.Review || mongoose.model('Review', Review);
