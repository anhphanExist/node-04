const Schema = require("mongoose").Schema;
const connection = require("../dataAccess/connection");

const userSchema = new Schema({
    username: {
        type: String,
        trim: true
    },
    created: {
       type: Date,
       default: Date.now
    }
});

const User = connection.model("User", userSchema);

module.exports = User;