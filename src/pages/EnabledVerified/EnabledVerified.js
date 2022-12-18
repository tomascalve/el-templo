import { useSelector } from 'react-redux';
import { resendVerifyEmail } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../constants/paths';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImgCorreoNoVerificado from '../../assets/images/ImgCorreoNoVerificado';
import useFetch from '../../hooks/useFetch';
import useStyles from './useStyles';
import DivBottom from '../../components/DivBottom/DivBottom';
import DivTop from '../../components/DivTop/DivTop';

const EnabledVerified = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const styles = useStyles();

	const { savedEmail } = useSelector((store) => store.auth);

	const [data, error, apiCall] = useFetch({
		service: () => resendVerifyEmail(savedEmail),
		globalLoader: true,
		successAlert: true,
		callback: () => navigate(`/${PATHS.LOGIN}`),
	});

	return (
		<MainContainer col='10' calc back>
			<DivTop>
				<div className={styles.title} style={{ marginTop: '20px' }}>
					<Text
						text={t(
							'auth.enabledVerified.emailNotVerified.title'
						)}
						size='4'
						bold
					/>
				</div>
				<div className={styles.text1}>
					<Text
						text={t(
							'auth.enabledVerified.emailNotVerified.auxText'
						)}
						size='3'
					/>
				</div>
				<div className={styles.img}>
					<ImgCorreoNoVerificado />
				</div>
			</DivTop>

			<DivBottom marginBottom={-35}>
				<div className={styles.text2}>
					<Text
						text={t(
							'auth.enabledVerified.emailNotVerified.hasNotEmail'
						)}
						size='1'
					/>
					<div className='col-12 mt-1'>
						<Button
							size={3}
							type={2}
							text={t(
								'auth.enabledVerified.emailNotVerified.btnResendEmail'
							)}
							onClick={apiCall}
						/>
					</div>
				</div>
			</DivBottom>
		</MainContainer >
	);
};

export default EnabledVerified;
