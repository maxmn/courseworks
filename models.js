const { model, Schema } = require('mongoose')

const Product = model('Product', Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
}))


module.exports = { Product }
