import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DivTop from '../../components/DivTop/DivTop';
import DivBottom from '../../components/DivBottom/DivBottom';
import InputDivided from '../../components/InputDivided/InputDivided';
import InputRange from '../../components/InputRange/InputRange';
import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import useFetch from '../../hooks/useFetch';
import { editAboutYou, getUserInfo } from '../../services/user';
import { getUserInfoAction } from '../../redux/user';
import { PATHS } from '../../constants/paths';

const EditAboutYou = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { trainingLevel, weight, height } = useSelector((store) => store.user);

	const [values, setValues] = useState({
		trainingLevel: 1,
		weight: 1,
		height: 1,
	});

	useEffect(() => {
		setValues({
			trainingLevel: trainingLevel,
			weight: weight,
			height: height,
		});
	}, [trainingLevel, height, weight]);

	const [infoData, infoDataError, apiCall] = useFetch({
		service: () => getUserInfo(),
		globalLoader: true,
		callback: () => {
			dispatch(getUserInfoAction(infoData?.user))
			navigate(`/${PATHS.MY_PROFILE}`)
		}
	})

	const [data, error, apiCallEditAboutYou] = useFetch({
		service: () => editAboutYou(values),
		globalLoader: true,
		callback: () => {
			apiCall()
		},
		successAlert: true
	});

	const handleChangeTrainingLevel = (e) =>
		setValues({ ...values, trainingLevel: parseInt(e.target.value) });

	const handleChangeInput = (e) => {
		let value = e.target.value;
		if (value.match(/^[0-9]*\.?[0-9]*$/)) {
			if (value === '') {
				setValues({ ...values, [e.target.name]: '' });
			} else {
				setValues({ ...values, [e.target.name]: value });
			}
		}
	};

	return (
		<MainContainer
			back
			text={t('user.aboutYou.editAboutYou')}
			shadow
			col='12'
			alignCenter
		>
			<DivTop
				justify='center'
				className='d-flex align-items-center'
				style={{ paddingTop: '50%' }}
			>
				<div className='col-12 d-flex flex-column justify-content-center align-items-center mt-5'>
					<Text
						text={t(`welcome.trainingLevel.level${values.trainingLevel}`)}
						color='1'
						size='1'
					/>
					<InputRange
						id='level'
						name='level'
						min='1'
						max='5'
						defaultValue={values.trainingLevel}
						onChange={handleChangeTrainingLevel}
					/>
					<div className='d-flex justify-content-between col-10'>
						<div style={{ marginTop: '-20px' }}>
							<Text text={t('welcome.trainingLevel.amateur')} color='1' size='1' />
						</div>
						<div style={{ marginTop: '-20px' }}>
							<Text text={t('welcome.trainingLevel.professional')} color='1' size='1' />
						</div>
					</div>
				</div>

				<div className='col-12 mt-5'>
					<div className='col-12 d-flex justify-content-center mb-2'>
						<InputDivided
							id='weight'
							name='weight'
							text1={t('welcome.weightHeight.weight')}
							text2={t('welcome.weightHeight.kilos')}
							onChange={handleChangeInput}
							type='text'
							min='20'
							max='400'
							maxLength='6'
							value={values.weight}
						/>
					</div>
					<div className='col-12 d-flex justify-content-center mb-1'>
						<InputDivided
							id='height'
							name='height'
							text1={t('welcome.weightHeight.height')}
							text2={t('welcome.weightHeight.meters')}
							onChange={handleChangeInput}
							type='text'
							min='1'
							max='3'
							maxLength='4'
							value={values.height}
						/>
					</div>
				</div>
			</DivTop>

			<DivBottom>
				<div className='col-11'>
					<Button
						text={t('user.aboutYou.saveChanges')}
						onClick={apiCallEditAboutYou}
						size={3}
					/>
				</div>
			</DivBottom>
		</MainContainer>
	);
};

export default EditAboutYou;
