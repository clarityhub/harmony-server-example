const { gql, makeExecutableSchema } = require('apollo-server');

const IssueController = require('../controllers/IssueController');

const typeDefs = gql`
    type Issue {
        id: ID!
        title: String!
    }

    type Query {
        issue(id: ID): Issue
    }
`;

const resolvers = {
	Query: {
		issue: async (root, args, { container }) => {
			const c = new IssueController(container);
			const issue = await c.get(args.id);

			return issue;
		},
	},
};


module.exports = makeExecutableSchema({
	typeDefs,
	resolvers,
});
