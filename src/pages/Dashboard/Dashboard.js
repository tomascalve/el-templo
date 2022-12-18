import MainContainer from '../../components/MainContainer/MainContainer';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import ImgDashboard from '../../assets/images/ImgDashboard';
import WeeklyCalendar from '../../components/WeeklyCalendar/WeeklyCalendar';
import useStyles from './useStyles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import ProfileImgAndXP from '../../components/ProfileImgAndXP/ProfileImgAndXP'
import './Dashboard.scss';
import DashboardBodyInfo from '../../components/DashboardBodyInfo/DashboardBodyInfo';
import { getDashboard } from '../../services/user';
import useFetch from '../../hooks/useFetch';

const Dashboard = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const { firstName, level, experience } = useSelector(
		(store) => store.user
	);


	const [data] = useFetch({
		service: () => getDashboard(),
		callNow: true,
		globalLoader: true,
	})


	const handleChange = () => {
		navigate(`/${PATHS.MY_PROGRESS}`)
	};
	const styles = useStyles();

	return (
		<MainContainer
			color={1}
			text={`${t('dashboard.main.welcome')} ${firstName ? firstName : ''}`}
			shadow
			col='12'
			scroll
			navbar
			alignCenter
		>
			<ProfileImgAndXP />

			<div className={styles.calendar}>
				<WeeklyCalendar data={data} />
			</div>

			<div className={styles.progressSummary}>
				<div className={styles.summary} >
					<div
						style={{ marginLeft: '6px' }}
					>
						<Text bold text={t('dashboard.main.summary')} size={2} />
					</div>
				</div>
				{level > 0 &&
					<div className={styles.seeDetails}>
						<Button
							disabled={!(!!data?.bodyParts?.bottom || !!data?.bodyParts?.bottom || !!data?.bodyParts?.middle)}
							onClick={handleChange}
							type={3}
							text={t('dashboard.main.see')}
							textSize={1}
						/>
					</div>
				}
			</div>
			{level === 0 ? (
				<div className='d-flex flex-column justify-content-start align-items-center'>
					<div className='col-10'>
						<Text className='mt-2 ' size='2' text={t('dashboard.main.progress')} />
					</div>
					<div className={styles.img}>
						<ImgDashboard />
					</div>
				</div>
			) : (
				<div className={styles.bodyInfoContainer}>
					<DashboardBodyInfo {...data?.bodyParts} />
				</div>)}
			{level === 0 && <div className={styles.btn}>
				<Button size={3} type={2} text={t('dashboard.main.btn')} onClick={() => navigate(`/${PATHS.NIVELATION}`)} />
			</div>}
		</MainContainer>
	);
};

export default Dashboard;
