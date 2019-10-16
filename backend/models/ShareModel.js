const { mongoose } = require('../db/connection')

const Schema = mongoose.Schema

const ShareModel = new Schema({
    userid: {
        type: String,
    },
    shares:[{
        postId: String
    }]
})

module.exports = mongoose.model('ShareModel',ShareModel)