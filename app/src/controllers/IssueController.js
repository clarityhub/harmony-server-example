const { Controller } = require('@clarityhub/harmony-server');

const IssueByIdValidator = require('../validators/IssueByIdValidator');
const IsAuthenticatedMiddleware = require('../middleware/IsAuthenticatedMiddleware');

module.exports = class IssueController extends Controller {
	constructor(ioc) {
		super(ioc);

		// this.middleware(IsAuthenticatedMiddleware);
	}

	async get(id) {
		const { Issue } = this.ioc;

		this.validate({ id }, IssueByIdValidator);

		return await Issue.findOne({
			where: {
				id,
			},
		});
	}

	async upvote(id) {
		const { Vote, Auth } = this.ioc;

		await this.middleware(IsAuthenticatedMiddleware);
		this.validate({ id }, IssueByIdValidator);

		try {
			const vote = await Vote.create({
				issueId: id,
				userId: Auth.getUserId(),
			});

			return vote;
		} catch (e) {
			throw e;
		}
	}

	async unvote(id) {
		const { Vote, Auth } = this.ioc;

		this.validate({ id }, IssueByIdValidator);

		try {
			const result = await Vote.remove({
				issueId:id,
				userId: Auth.getUserId(),
			});

			return result;
		} catch(e) {
			throw e;
		}
	}
};