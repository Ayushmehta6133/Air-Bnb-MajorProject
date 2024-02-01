const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema= new Schema({
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Review = mongoose.model('Review',reviewSchema);
module.exports = Review;
 