var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
    author    : String,
    title     : String,
    body      : String,
    date      : Date
});

exports.createPost = function() {

}