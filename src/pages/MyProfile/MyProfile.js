import './MyProfile.scss';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { cutDate } from '../../utils/date';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import GenericTicket from '../../components/GenericTicket/GenericTicket';
import { logoutAction } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
import ImportantBar from '../../components/ImportantBar/ImportantBar';
import Text from '../../components/Text/Text';
import CardInfo from './CardInfo/CardInfo';
import useStyles from './useStyles';

const MyProfile = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const styles = useStyles();

	const { startEnabledDate, endEnabledDate, goals, height, weight, level, img, firstName, lastName } =
		useSelector((store) => store.user);

	const handleChangePasswordNavigate = () =>
		navigate(`/${PATHS.CHANGE_USER_PASSWORD}`);

	const handleEditAboutYou = () => navigate(`/${PATHS.EDIT_ABOUT_YOU}`);

	const dispatch = useDispatch();
	const onLogout = () => {
		dispatch(logoutAction());
	};

	return (
		<MainContainer
			color='2'
			bg='1'
			back
			text={t('user.myProfile.myProfile')}
			col='12'
			scroll
			navbar
			alignCenter
		>
			<div className={styles.cardInfoContainer}>
				<CardInfo
					startEnabledDate={startEnabledDate}
					img={img}
					level={level}
					userName={`${firstName} ${lastName}`}
				/>
			</div>
			<div className={styles.importantBar}>
				<ImportantBar
					text={`${t('user.myProfile.endEnabledDate')}${cutDate(
						`${endEnabledDate}`
					)}`}
				/>
			</div >

			<div className={styles.aboutYouContainer}>
				<div className={styles.aboutYouText}>
					<Text bold text={`${t('user.myProfile.aboutYou')}`} />
				</div>
				<div className={styles.aboutYouBtnEdit} >
					<Text
						onClick={handleEditAboutYou}
						text={t('user.myProfile.edit')}
						color={5}
						size={2}
						bold
						cursorPointer
					/>
				</div>
			</div>

			<div className={styles.textBoxTitleContainer}>
				<Text justify='start' bold text={t('user.myProfile.goals')} />
			</div>

			<div className={styles.generic}>
				{goals?.map((goal, i) => {
					return (
						<GenericTicket
							key={i}
							list
							text1={i + 1}
							text2={`${t(`welcome.goals.${goal}`)}`}
						/>
					)
				})}
			</div>

			<div className={styles.textBoxTitleContainer}>
				<Text
					bold
					justify='start'
					text={t('user.myProfile.personalInfo')}
				/>
			</div>
			<div className={styles.generic}>
				<GenericTicket
					dividedTicket
					text1={t('user.myProfile.weight')}
					text3={`${weight} KG`}
				/>
				<GenericTicket
					dividedTicket
					text1={t('user.myProfile.height')}
					text3={`${height} Mt`}
				/>
			</div>

			<div className={styles.btn}>
				<Button
					textSize={2}
					text={t('user.myProfile.password')}
					type={4}
					onClick={handleChangePasswordNavigate}
				/>
				<Button
					textSize={2}
					text={t('user.myProfile.logOut')}
					type={4}
					onClick={onLogout}
					secondary
				/>
			</div>
		</MainContainer >
	);
};

export default MyProfile;
