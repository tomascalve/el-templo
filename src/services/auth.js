import { axiosInstance } from '../axios/axiosInstance';

const baseURL = '/auth';

export const login = ({ email, password }) => axiosInstance.post(`${baseURL}/login`, {
	email,
	password,
});


export const register = ({
	firstName,
	lastName,
	sex,
	email,
	password,
	dateOfBirth,
	country,
	img,
}) =>
	axiosInstance.post(`${baseURL}/register`, {
		firstName,
		lastName,
		sex,
		email,
		password,
		dateOfBirth,
		country,
		img,
	});

export const startPasswordRecovery = ({ email }) =>
	axiosInstance.post(`${baseURL}/start-password-recovery`, {
		email,
	});

export const resendVerifyEmail = (email) =>
	axiosInstance.post(`${baseURL}/resend-verify-email`, {
		email: email,
	});

export const enablePasswordRecovery = ({ token }) =>
	axiosInstance.get(
		`${baseURL}/enable-password-recovery?token=${token}`
	);


export const onPasswordRecovery = ({ token, password }) =>
	axiosInstance.put(`${baseURL}/on-password-recovery?token=${token}`, {
		newPassword: password,
	});

export const verifyEmailToBackEnd = ({ token }) =>
	axiosInstance.get(`${baseURL}/verify-email?token=${token}`);
