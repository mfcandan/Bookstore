var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name:{
        title: String,
        required: true
    },
    genre:{
        type: String,
        requird: true
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
    publiher:{
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

module.exports.getGenres = function(callback, limit){
    Book.find(callback).limit(limit ); 
}