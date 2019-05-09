const Schema = require("mongoose").Schema;
const connection = require("../dataAccess/connection");

const todoCategorySchema = new Schema({
    todo: {
       type: Schema.Types.ObjectId,
       ref: "Todo"
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const TodoCategory = connection.model("TodoCategory", todoCategorySchema);

module.exports = TodoCategory;