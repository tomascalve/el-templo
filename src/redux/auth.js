import { register } from '../services/auth';

// DEFAULT VALUE
const defaultValue = {
	token: null,
	error: false,
	enabled: false,
	loading: false,
	emailIsVerified: false,
	savedEmail: '',
};

// ACTION TYPES
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ERROR = 'ERROR';
const REGISTER = 'REGISTER';
const START_PASSWORD_RECOVERY = 'START_PASSWORD_RECOVERY';
const CHECK_LOGGED_USER = 'CHECK_LOGGED_USER';
const SAVE_EMAIL = 'SAVE_EMAIL';

// REDUCER
// El reducer lo que hace es encontrar la accion que queremos realizar
// Y al encontrarla le devuelve los valores al STORE, quien maneja los estados de redux
export default function AuthReducer(state = defaultValue, { type, payload }) {
	switch (type) {
		case CHECK_LOGGED_USER:
			return { ...state, token: payload };
		case LOGIN:
			return { ...state, token: payload, error: false };
		case LOGOUT:
			return defaultValue;
		case ERROR:
			return { ...state, error: true };
		case START_PASSWORD_RECOVERY:
			return { ...state, ...payload, error: false };
		case REGISTER:
			return { ...state, ...payload, error: false };
		case SAVE_EMAIL:
			return { ...state, savedEmail: payload, error: false };
		default:
			return state;
	}
}

const onLogout = () => {
	localStorage.removeItem('token');
};
// ACTIONS
export const checkLoggedUserAction = () => (dispatch) => {
	const token = localStorage.getItem('token');
	if (token) {
		dispatch({
			type: CHECK_LOGGED_USER,
			payload: token,
		});
	} else {
		onLogout();
		dispatch({
			type: LOGOUT,
		});
	}
};

export const saveEmailAction = ({ email }) => dispatch => {
	dispatch({
		type: SAVE_EMAIL,
		payload: email,
	});
}

export const loginAction =
	({ data, callback }) =>
	async (dispatch) => {
		//llamada al back

		if (data?.token) {
			localStorage.setItem('token', data.token);
		}
		dispatch({
			type: LOGIN,
			payload: data.token,
		});

		callback(); //Navega hacia '/enabled-verified', luego de los dispatchs.

		// El dispatch llama al reducer

		//dispatch de login si obtenemos el token

		//dispatch un error
	};

export const logoutAction = () => (dispatch) => {
	onLogout();
	dispatch({
		type: LOGOUT,
	});
};

export const registerAction =
	({
		firstName,
		lastName,
		sex,
		email,
		password,
		dateOfBirth,
		country,
		img,
		callback,
	}) =>
	async (dispatch) => {
		//llamada al back

		try {
			const response = await register({
				firstName,
				lastName,
				sex,
				email,
				password,
				dateOfBirth,
				country,
				img,
			});
			const { data, problem } = response.data;
			if (problem) {
				dispatch({
					type: ERROR,
				});
			} else {
				dispatch({
					type: REGISTER,
					payload: data,
				});
				dispatch({
					type: SAVE_EMAIL,
					payload: email,
				});
				callback();
			}
		} catch (error) {
			dispatch({
				type: ERROR,
			});
		}
	};

//dispatch un error
