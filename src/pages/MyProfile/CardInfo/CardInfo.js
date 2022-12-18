import { useNavigate } from 'react-router-dom';
import EditUserIcon from '../../../assets/Icons/EditUserIcon';
import Text from '../../../components/Text/Text';
import InputAvatar from '../../../components/InputAvatar/InputAvatar'
import { PATHS } from '../../../constants/paths';
import { cutDate } from '../../../utils/date';
import useStyles from './useStyles';
import { useTranslation } from 'react-i18next';
import './CardInfo.scss'

const CardInfo = ({ level, img, startEnabledDate, userName }) => {
	const { t } = useTranslation()
	const navigation = useNavigate();

	const onClickIcon = () => navigation(`/${PATHS.EDIT_PROFILE}`);

	const styles = useStyles();

	return (
		<div className={styles.container}>

			<div className={styles.imageContainer}>
				<InputAvatar img={img ? img : 0} />
			</div>

			<div className={styles.cardInfoTextContainer}>
				<Text
					justify='start'
					size='3'
					bold
					text={`${t('user.myProfile.level')} ${level}`}
				/>
				<div className={styles.userNameContainerFix}>
					<Text
						justify='start'
						size='1'
						text={userName ? userName : ''}
					/>
				</div>
				<Text
					justify='start'
					size='1'
					className=''
					text={`${t('user.myProfile.memberSince')}: ${cutDate(
						`${startEnabledDate}`
					)}`}
				/>
			</div>
			<div className={styles.iconEdit}>
				<span onClick={onClickIcon} style={{ cursor: 'pointer' }}>
					<EditUserIcon />
				</span>
			</div>
		</div>
	);
};

export default CardInfo;
