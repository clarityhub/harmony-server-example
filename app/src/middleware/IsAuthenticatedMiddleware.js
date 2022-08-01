const { Middleware } = require('@clarityhub/harmony-server');

module.exports = class IsAuthenticatedMiddleware extends Middleware {
	check() {
		if (this.ioc.Auth.getUserId() === -1) {
			throw new Error('No user id');
		}
	}
};
