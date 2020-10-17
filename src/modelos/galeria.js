const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema ({
    name: String,
    dest: String,
    img:
    {
        data: Buffer,
        contentType: String,
    },
    creation_date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = new mongoose.model('Img', imgSchema);