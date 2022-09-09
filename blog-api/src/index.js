const fs = require('fs')
const path = require('path')
const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers')
const { Post } = require('./models')

require('dotenv').config()

require('mongoose').connect(`${process.env.MONGODB_URI}`)
	.then(() => console.log('🔥 Mongodb connected'))

const typeDefs = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf-8')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ Post })
})

server.listen()
	.then(({ url }) => console.log(`🚀 Server ready at ${url}`))
