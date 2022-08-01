const singletonify = require('@clarityhub/harmony-server/src/singletonify');

module.exports = singletonify(function (Sequelize, sequelize) {
	return sequelize.define('Issue', {
		id: {
			type: Sequelize.BIGINT,
			primaryKey: true,
			autoIncrement: true,
		},

		title: {
			type: Sequelize.STRING,
		}
	});
});