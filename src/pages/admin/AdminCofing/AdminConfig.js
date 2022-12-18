import { useEffect } from 'react';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { replaceRouteName } from '../../../redux/route';

const AdminConfigScreen = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const { t } = useTranslation();

	const navigateToTags = () => navigate(`/${PATHS.ADMIN_TAGS}`);
	const navigateToLevels = () => navigate(`/${PATHS.ADMIN_LEVELS}`)
	const navigateToExercises = () => navigate(`/${PATHS.ADMIN_EXERCISES}`)

	useEffect(() => {
		dispatch(replaceRouteName(t('admin.adminConfig.index')));
	}, [])

	return (
				<div className='d-flex flex-column align-items-center'>
					<Button
						text={t('admin.adminConfig.adminTags')}
						onClick={navigateToTags}
						size={2}
						className='mt-5'
					/>
					<Button
						text={t('admin.adminConfig.adminLevels')}
						onClick={navigateToLevels}
						size={2}
						className='mt-3'
					/>
					<Button
						text={t('admin.adminConfig.adminExercises')}
						onClick={navigateToExercises}
						size={2}
						className='mt-3'
					/>
				</div>
	);
};

export default AdminConfigScreen;
