import { useState } from 'react';
import useForm from './UseForm';
import { RegisterValidate } from './RegisterValidate';
import Input from '../../components/Input/Input';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../components/MainContainer/MainContainer';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import InputSelect from '../../components/InputSelect/InputSelect';
import useStyles from './useStyles';
import SexSelector from '../../components/SexSelector/SexSelector';
import './Register.scss';
import { Countries } from '../../constants/countries';
import InputAvatar from '../../components/InputAvatar/InputAvatar';
import DivTop from '../../components/DivTop/DivTop'
import DivBottom from '../../components/DivBottom/DivBottom';

export const Register = () => {
	const { t } = useTranslation();
	const styles = useStyles();
	const countries = Countries({ t });

	const [type, setType] = useState('text');
	const onFocus = () => setType('date');
	const onBlur = () => setType('text');

	const [avatarImg, setAvatarImg] = useState(0);
	const [inputTypePassword, setInputTypePassword] = useState('password');
	const [inputTypePassword2, setInputTypePassword2] = useState('password');
	const [showAvatarModal, setShowAvatarModal] = useState(false)

	const onClickIconPassword = () => setInputTypePassword(inputTypePassword === 'password' ? 'text' : 'password')
	const onClickIconPassword2 = () => setInputTypePassword2(inputTypePassword2 === 'password' ? 'text' : 'password')

	const maxDateOfBirth = () => {
		// format yyyy-mm-dd
		const dateOfTodayFormat = `${new Date().getFullYear()}-${('' + new Date().getMonth()).length === 1 && '0'}${new Date().getMonth() + 1}-${('' + new Date().getDate()) <= 9 ? `0${new Date().getDate()}` : new Date().getDate()}`
		return dateOfTodayFormat
	}

	const onClickInputAvatar = () => {
		setShowAvatarModal(true)
	};
	const onCloseInputAvatar = () => {
		setShowAvatarModal(false)
	};

	const { handleChange, values, handleSubmit, errors } = useForm(
		RegisterValidate,
		avatarImg
	);
	console.log(values?.dateOfBirth);

	return (
		<MainContainer text={t('auth.register.register')} back shadow color={1} scroll col='11' alignCenter calc>
			<DivTop >
				<div className={styles.nameAndlastnameContainer}>

					<div>
						<InputAvatar
							showModal={showAvatarModal}
							onClickInputAvatar={onClickInputAvatar}
							onCloseInputAvatar={onCloseInputAvatar}
							onChangeAvatar={(value) => setAvatarImg(value)}
							img={avatarImg}
						/>
					</div>

					<div className={styles.NL}>
						<div className={styles.Fname}>
							<Input
								name='firstName'
								placeholder={t('auth.register.firstNamePlaceholder')}
								value={values.firstName}
								onChange={handleChange}
							/>
							{errors.firstName && (
								<p>{(errors.firstName = t('auth.register.firstNameError'))}</p>
							)}
						</div>
						<div className={styles.Lname}>
							<Input
								name='lastName'
								placeholder={t('auth.register.lastNamePlaceholder')}
								value={values.lastName}
								onChange={handleChange}
							/>
							{errors.lastName && (
								<p>{(errors.lastName = t('auth.register.lastNameError'))}</p>
							)}
						</div>
					</div>
				</div>

				<div className={styles.inputsSex}>
					<div className={styles.sexTitle} value={values.sex}>
						<div className={styles.labelSex}>
							<Text size='3' text={t('auth.register.sexTitle')} bold />
						</div>
						<SexSelector
							checkedF={values.sex === 'F' ? true : false}
							checkedM={values.sex === 'M' ? true : false}
							checkedO={values.sex === 'O' ? true : false}
							handleChange={handleChange}
						/>
					</div>
				</div>

				<div className={styles.emailPassCountryBirthday}>
					<div>
						<Input
							type='email'
							name='email'
							placeholder={t('auth.register.emailPlaceholder')}
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && <p>{(errors.email = t('auth.register.emailError'))}</p>}
					</div>
					<div>
						<Input
							name='password'
							placeholder={t('auth.register.passwordPlaceholder')}
							value={values.password}
							onChange={handleChange}
							isInvalid={errors.password}
							invalidText={t('auth.register.password1Error')}
							icon='eye'
							type={inputTypePassword}
							onClickIcon={onClickIconPassword}
							feedback={t('global.errors.validPassword')}
						/>
					</div>

					<div className={styles.password2}>
						<Input
							onChange={handleChange}
							isInvalid={errors.password}
							invalidText={t('auth.register.password2Error')}
							icon='eye'
							type={inputTypePassword2}
							onClickIcon={onClickIconPassword2}
							name='password2'
							placeholder={t('auth.register.password2Placeholder')}
							value={values.password2}
						/>
					</div>
					<div className={styles.inputCountry}>
						<InputSelect
							name='country'
							defaulValue={values.country}
							onChange={handleChange}
							options={countries}
						/>
					</div>

					{errors.country && <p>{(errors.country = t('auth.register.countryError'))}</p>}
					<Input
						label={t('auth.register.dateOfBirth')}
						max={maxDateOfBirth()}
						placeholder={t('auth.register.dateOfBirth')}
						name='dateOfBirth'
						value={values?.dateOfBirth}
						required
						onChange={handleChange}
						icon='date'
						type='date'
						cursorPointer
						marginFix
					/>
				</div>
			</DivTop>

			<DivBottom separation={2} marginBottom={-25}>
				<div className={styles.buttonInput} >
					<div className='col-11'>
						<Button
							size={3}
							disabled={
								(!values.firstName,
									!values.lastName,
									!values.sex,
									!values.email,
									!values.password,
									!values.password2,
									!values.country,
									!values.dateOfBirth)
							}
							onClick={handleSubmit}
							text={t('auth.register.btnRegister')}
						/>
					</div>
					{/* <div style={{ marginBottom: '-6px' }}>
						<Text
							size='1'
							text={t('auth.register.termsAndConditions1')}
							className={styles.textTermsAndConditions1}
						/>
					</div>
					<Text
						cursorPointer
						size='1'
						color={4}
						underline
						text={t('auth.register.termsAndConditions2')}
					/> */}
				</div>
			</DivBottom>
		</MainContainer>
	);
};

export default Register;
