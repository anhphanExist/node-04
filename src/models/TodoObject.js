const Schema = require("mongoose").Schema;
const connection = require("../dataAccess/connection");

const todoSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const TodoObject = connection.model("todo", todoSchema);

module.exports = TodoObject;