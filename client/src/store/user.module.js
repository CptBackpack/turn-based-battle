import UserService from '../services/user.service';
import TokenService from '../services/token.service';

export const user = {
	namespaced: true,
	actions: {
		getData({ commit }) {
			let accessToken = TokenService.getLocalAccessToken();
		
			return UserService.getUserDetails(accessToken).then(
				response => {
					commit('getUserDetailsSuccess');
					return Promise.resolve(response.data);
				},
				error => {
					return Promise.resolve(error.data);
				}
			);
		}
	},
	mutations: {
		getUserDetailsSuccess(state) {
			console.log('got user details');
			
		},
	}
};