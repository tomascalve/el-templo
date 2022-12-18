import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { changePassword } from '../../services/user';
import { useNavigate } from 'react-router';
import MainContainer from '../../components/MainContainer/MainContainer';
import DivTop from '../../components/DivTop/DivTop'
import DivBottom from '../../components/DivBottom/DivBottom'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useStyles from './useStyles';
import useFetch from '../../hooks/useFetch'
import './ChangeUserPassword.scss'
import { PATHS } from '../../constants/paths';

const ChangeUserPassword = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const styles = useStyles();

	const [showCurrentPassword, setShowCurrentPassword] = useState('password');
	const [showNewPasword, setShowNewPassword] = useState('password');
	const [showRepeatPassword, setShowRepeatPassword] = useState('password');
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const [changePasswordResponse, changePasswordError, changePasswordApiCall] = useFetch({
		service: () => changePassword({ currentPassword, newPassword }),
		globalLoader: true,
		callNow: false,
		callback: () => {
			navigate(`/${PATHS.MY_PROFILE}`)
		},
		successAlert: true
	})

	const handleChangeCurrentPassword = (e) => setCurrentPassword(e.target.value);
	const handleNewPassword = (e) => setNewPassword(e.target.value);
	const handleRepeatPassword = (e) => setRepeatPassword(e.target.value);

	const handleSubmit = () => changePasswordApiCall()

	const onClickShowCurrentPassword = () => setShowCurrentPassword(showCurrentPassword === 'password' ? 'text' : 'password')
	const onClickShowNewPassword = () => setShowNewPassword(showNewPasword === 'password' ? 'text' : 'password')
	const onClickShowRepeatPassword = () => setShowRepeatPassword(showRepeatPassword === 'password' ? 'text' : 'password')


	return (
		<MainContainer
			back
			shadow
			text={t('user.changeUserPassword.title')}
			alignCenter
			col='12'
		>
			<DivTop >
				<div className={styles.inputsContainer}>
					<Input
						icon='eye'
						placeholder={t('user.changeUserPassword.currentPassword')}
						onChange={handleChangeCurrentPassword}
						className='col-11'
						type={showCurrentPassword}
						onClickIcon={onClickShowCurrentPassword}
						margin='0px 0px 21px 0px'
					/>
					<Input
						icon='eye'
						placeholder={t('user.changeUserPassword.newPassword')}
						onChange={handleNewPassword}
						className='col-11'
						type={showNewPasword}
						onClickIcon={onClickShowNewPassword}
						feedback={t('global.errors.validPassword')}
					/>
					<Input
						icon='eye'
						placeholder={t('user.changeUserPassword.repeatNewPassword')}
						onChange={handleRepeatPassword}
						className='col-11'
						type={showRepeatPassword}
						onClickIcon={onClickShowRepeatPassword}
					/>
				</div>
			</DivTop>

			<DivBottom>
				<div className={styles.button}>
					<Button
						text={t('user.changeUserPassword.submitPassword')}
						disabled={
							!currentPassword ||
							newPassword !== repeatPassword ||
							!newPassword ||
							newPassword.length <= 6
						}
						onClick={handleSubmit}
						size={3}
					/>
				</div>
			</DivBottom>

		</MainContainer >
	);
};

export default ChangeUserPassword;
