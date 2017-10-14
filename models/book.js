var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publiher:{
        type: String
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit ); 
}

module.exports.getBookById = function(id, callback){
    Book.findById(id, callback); 
}