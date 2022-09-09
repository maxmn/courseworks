const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { Product } = require('./models')

const app = express()

if (process.env.NODE_ENV !== 'production')
	require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URI}`)
	.then(() => console.log('mongodb: connection successful'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/product/create', (req, res) => {
	const newProduct = new Product(req.body)
	newProduct.save()
		.then(data => res.send(data))
})


app.get('/product/list', (req, res) => {
	Product.find()
		.then(data => res.json(data))
})


app.listen(3000, () => {
	console.log('Server running at localhost:3000')
})
