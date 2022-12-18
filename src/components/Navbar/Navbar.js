import useStyles from './useStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROLES } from '../../constants/roles';
import IconDashboard from '../../assets/Icons/IconDashboard';
import IconDashboardActive from '../../assets/Icons/IconDashboardActive';
import IconMuscle from '../../assets/Icons/IconMuscle';
import IconMuscleActive from '../../assets/Icons/IconMuscleActive';
import IconProfile from '../../assets/Icons/IconProfile';
import IconProfileActive from '../../assets/Icons/IconProfileActive';
import IconHelp from '../../assets/Icons/IconHelp';
import IconHelpActive from '../../assets/Icons/IconHelpActive';
import { PATHS } from '../../constants/paths';
import Text from '../Text/Text';
import './Navbar.scss';

const Navbar = () => {
	const { role, level } = useSelector((store) => store.user);
	const currentLocation = useLocation().pathname.substring(1);

	const styles = useStyles();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const redirection = () => {
		if (level === 0) {
			navigate(`/${PATHS.NIVELATION}`);
		} else {
			navigate(`/${PATHS.TRAINING_DASHBOARD}`);
		}
	};

	return (
		<div className={styles.navbarContainer}>
			<div className={styles.iconsContainer}>
				{role === ROLES.ADMIN && (
					<Text
						text={'Admin'}
						onClick={() => navigate(`/${PATHS.BASE_URL}`)}
						color={
							currentLocation.includes('admin') ||
								currentLocation === ''
								? 'linkSelected'
								: 'link'
						}
						underline
					/>
				)}

				<span onClick={() => navigate(`/${PATHS.DASHBOARD}`)}>
					{pathname === '/' + PATHS.DASHBOARD ||
						(pathname === '/' && role !== ROLES.ADMIN) ? (
						<IconDashboardActive />
					) : (
						<IconDashboard />
					)}
				</span>
				<span onClick={redirection}>
					{pathname === '/' + PATHS.TRAINING ? (
						<IconMuscleActive />
					) : (
						<IconMuscle />
					)}
				</span>
				<span onClick={() => navigate(`/${PATHS.MY_PROFILE}`)}>
					{pathname === '/' + PATHS.MY_PROFILE ? (
						<IconProfileActive />
					) : (
						<IconProfile />
					)}
				</span>
				<span onClick={() => navigate(`/${PATHS.HELP}`)}>
					{pathname === '/' + PATHS.HELP ? (
						<IconHelpActive />
					) : (
						<IconHelp />
					)}
				</span>
			</div>
		</div>
	);
};

export default Navbar;
