const { gql, makeExecutableSchema } = require('apollo-server');

const IssueController = require('../controllers/IssueController');

const typeDefs = gql`
    type Query {
        dummy: String
    }

   type Mutation {
       upvoteIssue(id: ID!): Vote
   }

   type Vote {
       id: ID!
       issueId: ID!
       userId: ID!
   }
`;

const resolvers = {
	Query: {},
	Mutation: {
		upvoteIssue: async (root, args, { container }) => {
			const c = new IssueController(container);
			const vote = await c.upvote(args.id);

			return vote;
		},
	},
};


module.exports = makeExecutableSchema({
	typeDefs,
	resolvers,
});
