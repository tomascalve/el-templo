import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import InputSelect from '../../components/InputSelect/InputSelect';
import SexSelector from '../../components/SexSelector/SexSelector';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Countries } from '../../constants/countries';
import { editProfile, getUserInfo } from '../../services/user';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './useStyles.js';
import './EditProfile.scss';
import InputAvatar from '../../components/InputAvatar/InputAvatar';
import { maxDateOfBirth } from '../../utils/date';
import DivTop from '../../components/DivTop/DivTop'
import DivBottom from '../../components/DivBottom/DivBottom'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import { getUserInfoAction } from '../../redux/user';


const EditProfile = () => {
	const { t } = useTranslation();
	const styles = useStyles();
	const countries = Countries({ t });
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { firstName, lastName, sex, country, dateOfBirth, img } = useSelector(
		(store) => store.user
	);

	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		sex: '',
		dateOfBirth: '',
		country: '',
	})
	const [avatarImg, setAvatarImg] = useState(img ? img : 0);
	const [showAvatarModal, setShowAvatarModal] = useState(false);

	useEffect(() => {
		setValues({
			firstName: firstName,
			lastName: lastName,
			sex: sex,
			dateOfBirth: moment(dateOfBirth).format('YYYY-MM-DD'),
			// dateOfBirth: dateOfBirth,
			country: country?.toLowerCase(),
		})
	}, [firstName, lastName, sex, country, dateOfBirth, img])

	const [infoData, infoDataError, apiCall] = useFetch({
		service: () => getUserInfo(),
		globalLoader: true,
		callback: () => {
			dispatch(getUserInfoAction(infoData?.user))
			navigate(`/${PATHS.MY_PROFILE}`)
		}
	})

	const [editProfileResponse, editProfileError, editProfileApiCall] = useFetch({
		service: () => editProfile({ ...values, img: avatarImg }),
		globalLoader: true,
		callback: () => {
			apiCall()
		},
		successAlert: true
	});

	const onClickInputAvatar = () => {
		setShowAvatarModal(true);
	};
	const onCloseInputAvatar = () => {
		setShowAvatarModal(false);
	};

	const handleChangeInput = (e) => setValues({ ...values, [e.target.name]: e.target.value })

	return (
		<MainContainer back text={t('profile.editProfile.topBar')} shadow alignCenter>
			<DivTop>
				<div className={styles.ImgAndName}>
					<div className={styles.userImg} style={{ marginLeft: '-5px' }}>
						<div>
							<InputAvatar
								isEditing
								showModal={showAvatarModal}
								onClickInputAvatar={onClickInputAvatar}
								onCloseInputAvatar={onCloseInputAvatar}
								onChangeAvatar={(value) => setAvatarImg(value)}
								img={avatarImg ? avatarImg : 0}
							/>
						</div>
					</div>

					<div className={styles.userName}>
						<Input
							name='firstName'
							placeholder={t('auth.register.firstNamePlaceholder')}
							value={values?.firstName || ''}
							onChange={handleChangeInput}
						/>
						<Input
							name='lastName'
							placeholder={t('auth.register.lastNamePlaceholder')}
							value={values?.lastName || ''}
							onChange={handleChangeInput}
						/>
					</div>
				</div>
				<div className={styles.SexSelection}>
					<div className={styles.textSex}>
						<Text text='Sexo' bold />
					</div>
					<SexSelector
						checkedF={values?.sex === 'F' ? true : false}
						checkedM={values?.sex === 'M' ? true : false}
						checkedO={values?.sex === 'O' ? true : false}
						handleChange={handleChangeInput}
					/>
				</div>

				<div className={styles.inputBox}>
					<InputSelect
						name='country'
						value={values?.country || ''}
						onChange={handleChangeInput}
						options={countries}
					/>

					<Input
						label={t('auth.register.dateOfBirth')}
						max={maxDateOfBirth()}
						placeholder={t('auth.register.dateOfBirth')}
						name='dateOfBirth'
						value={values?.dateOfBirth}
						required
						onChange={handleChangeInput}
						icon='date'
						type='date'
						cursorPointer
						marginFix
					/>
				</div>
			</DivTop>

			<DivBottom separation={1}>
				<div className={styles.buttonBox}>
					<Button text={t('profile.editProfile.saveChanges')} onClick={() => editProfileApiCall()} />
				</div>
			</DivBottom>
		</MainContainer>
	);
};

export default EditProfile;
