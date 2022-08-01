const { ApolloServer, mergeSchemas } = require('apollo-server');
const { jwtAuthContext } = require('@clarityhub/harmony-jwt-auth');

const issueSchema = require('./issue');
const voteSchema = require('./vote');
const bottle = require('../bottle');

const linkTypeDefs = `
    extend type Vote {
        issue: Issue
    }
`;

const server = new ApolloServer({
	schema: mergeSchemas({
		schemas: [
			issueSchema,
			voteSchema,
			linkTypeDefs,
		],
		resolvers: {
			Vote: {
				issue: {
					fragment: '... on Vote { issueId }',
					resolve(vote, args, context, info) {
						return info.mergeInfo.delegateToSchema({
							schema: issueSchema,
							operation: 'query',
							fieldName: 'issue',
							args: {
								id: vote.issueId,
							},
							context,
							info
						});
					},
				},
			},
		},
	}),
	context: jwtAuthContext(
		process.env.JWT_PUBLIC_KEY,
		{
			algorithm: 'RS256',
		},
		(auth) => {
			bottle.factory('Auth', () => auth);

			return {
				container: bottle.container,
			};
		}
	),
});

module.exports = server;