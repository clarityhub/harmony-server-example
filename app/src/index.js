const gqlServer = require('./graphql/index');

gqlServer.listen({ port: 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
