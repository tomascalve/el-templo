import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../../../components/Button/Button';
import { PATHS } from '../../../constants/paths';
import Text from '../../../components/Text/Text';
import MainContainer from '../../../components/MainContainer/MainContainer';
import useStyles from './useStyles';
import DivTop from '../../../components/DivTop/DivTop';
import DivBottom from '../../../components/DivBottom/DivBottom';
const Welcome = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const styles = useStyles();
	const { firstName } = useSelector((store) => store.user);

	const toOnboarding = () => navigate(`/${PATHS.MAIN_GOALS}`);

	return (
		<MainContainer backgroundImg='welcome1'>
			<DivTop>
				<div className={styles.text}>

					<Text
						text={t('welcome.main.title')}
						size='5'
						color='2'
						font='2'
						justify='start'
					/>
					<Text
						text={`${t('welcome.main.hello')} ${firstName}!`}
						size='4'
						color='2'
						bold
						justify='start'
					/>
				</div>
			</DivTop>
			<DivBottom separation={1}>
			<Text text={t('welcome.main.auxText')} size='3' color='5' bold className='mt-5' />
				<Button
					text={t('welcome.main.btnLetsBegin')}
					onClick={toOnboarding}
					size={3}
				/>
			</DivBottom>

		</MainContainer>
	);
};

export default Welcome;
