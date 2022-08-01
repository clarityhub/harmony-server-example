const { SequelizeMigrationProvider } = require('@clarityhub/harmony-sequelize-provider');
const sequelize = require('./src/services/Sequelize');

module.exports = {
	migrations: {
		provider: SequelizeMigrationProvider,
		options: {
			sequelize,
		},
	},
};
