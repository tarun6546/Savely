const mongoose = require('mongoose');

//schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'name is must'],
    },
    email: {
        type: String,
        required: [true,'email is must'],
        unique: true,
    },
    password: {
        type: String,
        required: [true,'password is must'],
    },
},{
    timestamps: true,
});

//export
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;