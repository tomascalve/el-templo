import {axiosInstance} from './axiosInstance';

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	config.headers.Authorization = `Bearer ${token}`;
	config.headers.currDate = new Date();
	return config;
});

export const privateGet = ({url}) => {
	return axiosInstance.get(url);
};
export const privatePost = ({url, body}) => {
	return axiosInstance.post(url, body);
};
export const privatePut = ({url, body}) => {
	return axiosInstance.put(url, body);
};
export const privateDelete = ({url}) => {
	return axiosInstance.delete(url);
};
