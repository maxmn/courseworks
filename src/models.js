const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
	content: String,
	likes: Number,
	comments: [{
		content: String,
		replies: [{
			content: String
		}]
	}]
})

module.exports = {
	Post: model('Post', PostSchema)
}
