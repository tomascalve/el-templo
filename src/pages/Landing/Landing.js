import Button from '../../components/Button/Button';
import { LanguageSelector } from '../../components/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { PATHS } from '../../constants/paths';
import MainContainer from '../../components/MainContainer/MainContainer';
import ElTemploLogo from '../../assets/images/ElTemploLogo';
import useStyles from './useStyles';
import './Landing.scss'
import InstallApp from '../../components/InstallApp/InstallApp';

const Landing = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmitLogin = () => navigate(`/${PATHS.LOGIN}`);
	const handleSubmitRegister = () => navigate(`/${PATHS.REGISTER}`);

	const styles = useStyles();

	return (
		<MainContainer backgroundImg='login' calc>
			<div className={styles.languageSelector}>
				<LanguageSelector />
			</div>
			<div className={styles.mainLogo}>
				<ElTemploLogo />
			</div>
			<div className={styles.buttonsContainer}>
				<InstallApp />
				<Button
					onClick={handleSubmitLogin}
					text={t('auth.landing.btnLogin')}
					className='mb-2'
					textSize='1'
				/>
				<Button
					onClick={handleSubmitRegister}
					text={t('auth.landing.btnRegister')}
					textSize='1'
				/>
			</div>
		</MainContainer>
	);
};

export default Landing;
