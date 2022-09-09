const { useAuthorInfo } = require('./utils')

module.exports = {
	Query: {
		async postById(parent, { id }, ctx) {
			const post = await ctx.Post.findById(id)
			post[author] = await useAuthorInfo()
			return useAuthorInfo(post)
		},

		async posts(parent, args, ctx) {
			const posts = await ctx.Post.find()
			return posts.map(post => useAuthorInfo(post))
		}
	},

	Mutation: {
		async createPost(parent, { content }, ctx) {
			let params = { content, likes: 0, comments: [] }
			const doc = new ctx.Post(params)
			const newPost = await doc.save()
			return useAuthorInfo(newPost)
		},

		async updatePost(parent, { postId, content }, ctx) {
			const newPost = await ctx.Post.findByIdAndUpdate(
				postId, { content }, { new: true }
			)
			return useAuthorInfo(newPost)
		},

		async removePost(parent, { postId }, ctx) {
			const post = await ctx.Post.findByIdAndRemove(postId)
			return useAuthorInfo(post)
		},

		async likePost(parent, { postId }, ctx) {
			const post = await ctx.Post.findByIdAndUpdate(
				postId, { $inc: {"likes": 1} }, { new: true }
			)
			return useAuthorInfo(post)
		},

		async unlikePost(parent, { postId }, ctx) {
			const post = await ctx.Post.findByIdAndUpdate(
				postId, { $inc: {"likes": -1} }, { new: true }
			)
			return useAuthorInfo(post)
		},

		async createComment(parent, { postId, content }, ctx) {
			const post = await ctx.Post.findByIdAndUpdate(
				postId, { $push: {"comments": { content }} }, { new: true }
			)
			return useAuthorInfo(post)
		},

		async deleteComment(parent, { postId, commentId }, ctx) {
			const post = await ctx.Post.findByIdAndUpdate(
				postId, { $pull: {"comments": { _id: commentId }} }, { new: true }
			)
			return useAuthorInfo(post)
		}
	}
}
