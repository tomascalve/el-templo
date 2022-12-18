import { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';
import { onPasswordRecovery } from '../../services/auth';
import { useTranslation } from 'react-i18next';
import Text from '../../components/Text/Text';
import { getSearchParams } from '../../utils/searchParams';
import { PATHS } from '../../constants/paths';
import useFetch from '../../hooks/useFetch';
import useStyles from './useStyles';

const PasswordRecoveryForm = () => {
	const token = getSearchParams('token');

	const { t } = useTranslation();
	const navigate = useNavigate();
	const styles=useStyles();

	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const [passwordType, setPasswordType] = useState('password');
	const [repeatPasswordType, setRepeatPasswordType] = useState('password');

	
	const [data, error, apiCall] = useFetch({
		service: () => onPasswordRecovery({ password, token }),
		globalLoader: true,
		callback: () => navigate(`/${PATHS.LOGIN}`),
		successAlert: true
	});

	const onChangePasswordType = () => {
		setPasswordType( passwordType === 'password' ? 'text' : 'password');
	}
	const onChangeRepeatPasswordType = () => {
		setRepeatPasswordType( repeatPasswordType === 'password' ? 'text' : 'password');
	}

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleChangeRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.div}>
					<Text size='4' bold text={t('auth.passwordRecoveryForm.title')} />
				</div>

				<Input
					placeholder={t('auth.passwordRecoveryForm.newPassword')}
					type={passwordType}
					value={password}
					onChange={handleChangePassword}
					icon='eye'
					feedback={t('global.errors.validPassword')}
					onClickIcon={onChangePasswordType}
				/>
				<Input
					placeholder={t('auth.passwordRecoveryForm.repeatNewPassword')}
					type={repeatPasswordType}
					value={repeatPassword}
					onChange={handleChangeRepeatPassword}
					icon='eye'
					onClickIcon={onChangeRepeatPasswordType}
				/>
			</div>

			<div>

				<Button
					text={t('auth.passwordRecoveryForm.btnUpdatePassword')}
					onClick={apiCall}
					disabled={
						password !== repeatPassword ||
						!password ||
						password.length <= 5
					}
				/>
			</div>
		</div>
	);
};

export default PasswordRecoveryForm;
