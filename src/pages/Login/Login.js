import './Login.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction, saveEmailAction } from '../../redux/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import MainContainer from '../../components/MainContainer/MainContainer';
import { login } from '../../services/auth';
import useFetch from '../../hooks/useFetch';
import Text from '../../components/Text/Text';
import Alert from './Alert/Alert';
import useStyles from './useStyles';
import DivTop from '../../components/DivTop/DivTop';
import DivBottom from '../../components/DivBottom/DivBottom';

const Login = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const styles = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showAlert, setShowAlert] = useState(false);
	const [inputType, setInputType] = useState('password');

	const callback = () => {
		if (data) {
			if (data.token) {
				const callback = () => navigate(`/${PATHS.LOGIN}`);
				dispatch(
					loginAction({
						data: { token: data?.token, email },
						callback,
					})
				);
			} else if (!data.emailIsVerified) {
				dispatch(saveEmailAction({ email }));
				navigate(`/${PATHS.ENABLED_VERIFIED}`);
			} else if (!data.enabled) {
				setShowAlert(true);
			}
		}
	};

	const [data, error, apiCall] = useFetch({
		service: () => login({ email, password }),
		globalLoader: true,
		callback,
	});

	const toRegister = () => navigate(`/${PATHS.REGISTER}`);
	const toForgottenPassword = () => navigate(`/${PATHS.FORGOTTEN_PASSWORD}`);

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const onCloseAlert = () => {
		setShowAlert(false);
	};

	const onClickIcon = () => {
		if (inputType === 'password') {
			setInputType('text');
		}
		if (inputType === 'text') {
			setInputType('password');
		}
	};

	return (
		<MainContainer backgroundImg='login' color={2} back calc col='12'>
			<DivTop >
				<div className={styles.titleContainer}>
					<Text
						justify='start'
						size={4}
						color={2}
						bold
						text={t('auth.login.title')}
					/>
					<Text
						justify='start'
						color={2}
						text={t('auth.login.subtitle')}
					/>
				</div>

				<div className={styles.inputsContainer}>
					<div className={styles.eachInput}>
						<Input
							value={email}
							onChange={handleChangeEmail}
							type='email'
							placeholder={t('auth.login.emailPlaceholder')}
							transparent
						/>
					</div>
					<div className={styles.eachInput}>
						<Input
							icon='eye'
							value={password}
							onChange={handleChangePassword}
							type={inputType}
							placeholder={t('auth.login.passwordPlaceholder')}
							onClickIcon={onClickIcon}
							transparent
						/>
					</div>

					<Button onClick={apiCall} text={t('auth.login.btnLogin')} />

					<div className={styles.textRecovery}>
						<Text
							cursorPointer
							bold
							color={3}
							size={1}
							underline
							onClick={toForgottenPassword}
							text={t('auth.login.recovery')}
						/>
					</div>
				</div>
			</DivTop>

			<DivBottom  >
				<div className={styles.textRegister}>
					<div className='mx-1'>
						<Text size={1} color={2} text={t('auth.login.register1')} />
					</div>
					<Text
						cursorPointer
						size={1}
						color={3}
						bold
						underline
						onClick={toRegister}
						text={t('auth.login.register2')}
					/>
				</div>
				<Alert show={showAlert} onClose={onCloseAlert} />
			</DivBottom>
		</MainContainer>
	);
};

export default Login;
