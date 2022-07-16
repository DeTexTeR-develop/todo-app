const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: String,
    priority: String,
    status: String 
});

module.exports = mongoose.model('todos' , TodoSchema);