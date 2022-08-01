module.exports = class Vote {
	async create(clause) {
		return {
			id: 1234,
			issueId: clause.issueId,
			userId: clause.userId,
		};
	}
};
