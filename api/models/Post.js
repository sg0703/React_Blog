const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    userId: {
        type: Number, 
        require: true
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);