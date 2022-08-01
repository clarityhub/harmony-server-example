// const { DATABASE_URL } = process.env;

// if (!DATABASE_URL) {
//     console.error('Could not connect to database. A DATABASE_URL is required');
//     process.exit(1);
// }
const singletonify = require('@clarityhub/harmony-server/src/singletonify');

module.exports = singletonify(function (Sequelize) {
	return new Sequelize(
		'postgres://postgres:postgres@postgres:5432/clarity_harmony_development',
		{
			dialect: 'postgres',
			logging: false,
			operatorsAliases: false,
			pool: {
				idle: 300,
				max: 1,
				min: 0,
			},
			retry: {
				max: 1,
				match: [
					Sequelize.ConnectionError,
				],
			},
		}
	);
});
