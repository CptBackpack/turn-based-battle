import api from './api';

class UserService {
	getUserDetails(accessToken) {
		const params = new URLSearchParams([['accessToken', accessToken]]);
		return api.get('/test', {
			params
		});
	}

	getUserBoard() {
		return api.get('/test/user');
	}

	getModeratorBoard() {
		return api.get('/test/mod');
	}

	getAdminBoard() {
		return api.get('/test/admin');
	}
}

export default new UserService();