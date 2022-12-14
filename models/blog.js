const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//creating a Schema
const blogSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    snippet: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    }
},{timestamps: true});
//creating a model
const Blog = mongoose.model('Blogs', blogSchema);
module.exports = Blog;