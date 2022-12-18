import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImgKeyFP from '../../assets/images/ImgKeyFP';
import ImgPadlockFP from '../../assets/images/ImgPadlockFP';
import useFetch from '../../hooks/useFetch';
import { startPasswordRecovery } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import useStyles from './useStyles';
import './ForgottenPassword.scss'
import { checkValidEmail } from '../../utils/email';


const ForgottenPassword = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();
	const styles = useStyles();

	const [email, setEmail] = useState('');

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const [data, error, apiCall] = useFetch({
		service: () => startPasswordRecovery({ email }),
		globalLoader: true,
		callback: () => navigate(`/${PATHS.LOGIN}`),
		successAlert: true
	})

	return (
		<MainContainer back col='12' backgroundImg='lock' color={1}>
			<div className='col-11 m-auto'>
				<div className={styles.titleContainer}>
					<Text size={4} bold text={t('auth.forgotPassword1.title')} />
				</div>
				<div className={styles.inputContainer}>
					<Input
						value={email}
						onChange={handleChangeEmail}
						type='email'
						placeholder={t('auth.forgotPassword1.emailPlaceholder')}
					/>
				</div>
				<Text size={2} text={t('auth.forgotPassword1.contentForgotPassword')} />
			</div>
			<div className={styles.imgContainer}>
				<ImgPadlockFP />
				<ImgKeyFP />
			</div>
			<div className='col-10 m-auto'>
				<Button
					size={3}
					disabled={!checkValidEmail(email)}
					type={2}
					onClick={apiCall}
					text={t('auth.forgotPassword1.btnAccept')}
					className='mb-4'
				/>
			</div>
		</MainContainer >
	);
};

export default ForgottenPassword;
