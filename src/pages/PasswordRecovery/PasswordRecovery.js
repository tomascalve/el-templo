import { useEffect } from 'react';
import { getSearchParams } from '../../utils/searchParams';
import { enablePasswordRecovery } from '../../services/auth';
import PasswordRecoveryForm from './PasswordRecoveryForm';
import PasswordRecoveryError from './PasswordRecoveryError';
import useFetch from '../../hooks/useFetch';
import MainContainer from '../../components/MainContainer/MainContainer';

const PasswordRecovery = () => {
	const token = getSearchParams('token');

	const [data, error, apiCall] = useFetch({
		service: () => enablePasswordRecovery({ token }),
		globalLoader: true,
		successAlert: true,
	})

	useEffect(() => {
		if (token) {
			apiCall();
		}
	}, [token]);

	return (
		<MainContainer back>
				{data && <PasswordRecoveryForm />}
				{error && <PasswordRecoveryError />}
				<div className='mb-3'></div>
		</MainContainer>
	);
};

export default PasswordRecovery;
