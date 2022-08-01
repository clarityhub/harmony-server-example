module.exports = {
	up(queryInterface, Sequelize) {
		return queryInterface.createTable(
			'Issues',
			{
				id: {
					type: Sequelize.BIGINT,
					primaryKey: true,
					autoIncrement: true,
				},

				title: {
					type: Sequelize.STRING,
				},

				createdAt: Sequelize.DATE,
				updatedAt: Sequelize.DATE,
				deletedAt: Sequelize.DATE,
			}
		);
	},

	down(queryInterface) {
		return queryInterface.dropTable('Issues');
	}
};