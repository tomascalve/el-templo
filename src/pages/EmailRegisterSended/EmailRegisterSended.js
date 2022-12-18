import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { resendVerifyEmail } from '../../services/auth';
import Text from '../../components/Text/Text';
import MainContainer from '../../components/MainContainer/MainContainer';
import IconEmailSended from '../../assets/Icons/IconEmailSended';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import useStyles from './useStyles';

const EmailRegisterSended = () => {
	const { t } = useTranslation();
	const { savedEmail } = useSelector((store) => store.auth);
	const navigate = useNavigate();
	const styles=useStyles();

	const [data, error, apiCall] = useFetch({
		service: () => resendVerifyEmail(savedEmail),
		globalLoader: true,
		callback: () => navigate(`${PATHS.LOGIN}`),
		successAlert: true
	})

	return (
		<MainContainer>

				<Text
					size={4}
					bold
					text={t('auth.emailConfirm.title')}
					className='mt-5'
					back
				/>
				<div>

					<div className={styles.icon}>

						<IconEmailSended />
					</div>
					<div>
						<div className={styles.text}>

							<Text size={3} bold text={t('auth.emailConfirm.p1')} />
						</div>
						<Text size={3} text={t('auth.emailConfirm.p2')} />
					</div>
				</div>
				<div>

					<Text justify='start' size={1} text={t('auth.emailConfirm.p3')} />
					<Button
						text={t('auth.emailConfirm.btnConfirm')}
						onClick={apiCall}
					/>
				</div>
		</MainContainer>
	);
};

export default EmailRegisterSended;
