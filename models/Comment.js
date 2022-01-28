import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String,
  user: { image: String, name: String, userName: String },
  review: Schema.Types.ObjectId,
});


module.exports = mongoose.models.Comment || mongoose.model('Comment', Comment);
