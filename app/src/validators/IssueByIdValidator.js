const Validator = require('@clarityhub/harmony-server/src/Validator');

module.exports = class IssueByIdValidator extends Validator {
	getConstraints() {
		return {
			id: {
				presence: {
					allowEmpty: false,
				},
			}
		};
	}
};
