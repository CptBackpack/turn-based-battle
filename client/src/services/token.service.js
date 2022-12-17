/** 
 * This file describes the functionality that is used for the User
 */

class TokenService {
	key = 'TBBUserTokenKeyValue';

	getLocalAccessToken() {
		const user = JSON.parse(localStorage.getItem(import.meta.env.VITE_STORAGE_KEY));
		return user?.accessToken;
	}

	updateLocalAccessToken(token) {
		let user = JSON.parse(localStorage.getItem(import.meta.env.VITE_STORAGE_KEY));
		user.accessToken = token;

		localStorage.setItem(import.meta.env.VITE_STORAGE_KEY, JSON.stringify(user));
	}

	getUser() {
		return JSON.parse(localStorage.getItem(import.meta.env.VITE_STORAGE_KEY));
	}

	setUser(user) {
		localStorage.setItem(import.meta.env.VITE_STORAGE_KEY, JSON.stringify(user));
	}

	removeUser() {
		localStorage.removeItem(import.meta.env.VITE_STORAGE_KEY);
	}
}

export default new TokenService();