import axios from 'axios';

// const BASE_URL = 'https://el-templo.herokuapp.com/api';
const BASE_URL = 'https://eltemplo.herokuapp.com/api'
// const BASE_URL = 'http://localhost:3100/api';

const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use((config) => {
	if (config.status === 403) {
		localStorage.clear();
		window.location.href = '/';
	}
	return config;
});

export { axiosInstance };
