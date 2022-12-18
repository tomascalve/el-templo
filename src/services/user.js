import { privatePut, privateGet, privatePost } from '../axios/privateInstance';

const baseURL = '/user';
export const help = ({ message, subject }) =>
	privatePost({
		url: `${baseURL}/send-email-coach`,
		body: {
			message: message,
			subject: subject,
		},
	});

export const changePassword = ({ currentPassword, newPassword }) =>
	privatePut({
		url: `${baseURL}/change-password`,
		body: {
			currentPassword: currentPassword,
			newPassword: newPassword,
		},
	});

export const makeNivelation = (data) => privatePost({
	url: `/training/make-nivelation`, body: {
		results: data.map(d => ({
			id: d.id,
			count: d.count
		}))
	}
});


export const editProfile = ({
	img,
	firstName,
	lastName,
	sex,
	country,
	dateOfBirth,
}) =>
	privatePut({
		url: `${baseURL}/edit-basic-info`,
		body: {
			img,
			firstName,
			lastName,
			sex,
			country,
			dateOfBirth,
		},
	});

export const editAboutYou = ({ trainingLevel, height, weight }) =>
	privatePut({
		url: `${baseURL}/edit-training-info`,
		body: {
			trainingLevel,
			height: parseFloat(height),
			weight: parseFloat(weight),
		},
	});

export const getUserInfo = () => privateGet({ url: `${baseURL}/info` });

export const putTrainingInfo = (trainingInfo) =>
	privatePut({
		url: `${baseURL}/edit-training-info`,
		body: {
			goals: trainingInfo.goals,
			trainingLevel: trainingInfo.trainingLevel,
			weight: trainingInfo.weight,
			height: trainingInfo.height,
		},
	});

export const getDashboard = () => privateGet({ url: `${baseURL}/dashboard` });
