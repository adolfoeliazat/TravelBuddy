'use strict'
const apiAi = require('./helpers/api-ai');
const huh = require('huh')
function botFlow(request, originalApiRequest) {
	originalApiRequest.lambdaContext.callbackWaitsForEmptyEventLoop = false

	if (!request.postback)
		return apiAi(request.text, request.sender, originalApiRequest.env.apiAiToken)
	.then(res => {
		console.log('api.ai', res)

		return res.reply.speech || res.reply
	})
}

module.exports = botFlow
