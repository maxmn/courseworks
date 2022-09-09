const { request } = require('@octokit/request')

function getAuthorInfo(githubUsername) {
	return request('GET /users/{username}',{username: githubUsername})
		.then(user => user.data)
		.then(({ login, name, bio }) => ({ login, name, bio }))
}

function extractUsername(content) {
	let tokens = content.match(/\S+/g)
	let last = tokens.slice(-1).toString()
	if (last.startsWith("~@")) {
		return last.slice(2)
	}
	return null
}

async function useAuthorInfo(query) {
	const username = extractUsername(query.content)
	if (username == null) {
		return query
	}
	const newQuery = query
	newQuery["authorInfo"] = await getAuthorInfo(username)
	return newQuery
}

module.exports = { useAuthorInfo }
