import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import useFetch from '../../hooks/useFetch';
import { register } from '../../services/auth';

const useForm = (RegisterValidate, img) => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		sex: '',
		email: '',
		password: '',
		password2: '',
		dateOfBirth: '',
		country: '',
	});

	const [data, error, apiCall] = useFetch({
		service: () =>
			register({
				...values,
				img,
			}),
		globalLoader: true,
		successAlert: true,
	});

	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		const auxErrors = RegisterValidate(values);
		setErrors(auxErrors);

		apiCall();
	};

	useEffect(() => {
		if (data) {
			navigate(`/${PATHS.EMAIL_REGISTER_SENDED}`);
		}
	}, [data]);

	return { handleChange, handleSubmit, values, errors };
};
export default useForm;
