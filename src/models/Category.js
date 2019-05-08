const Schema = require("mongoose").Schema;
const connection = require("../dataAccess/connection");


const categorySchema = new Schema({
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


const Category = connection.model("Category", categorySchema);

module.exports = Category;