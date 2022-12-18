import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAction } from '../../../redux/user';
import { getUserInfo, putTrainingInfo } from '../../../services/user';
import { useNavigate } from 'react-router-dom';

import './WeightHeight.scss';

import Button from '../../../components/Button/Button';
import Text from '../../../components/Text/Text';
import { PATHS } from '../../../constants/paths';
import { useTranslation } from 'react-i18next';
import InputDivided from '../../../components/InputDivided/InputDivided';
import MainContainer from '../../../components/MainContainer/MainContainer';
import useFetch from '../../../hooks/useFetch';
import useStyles from './useStyles';
import DivTop from '../../../components/DivTop/DivTop';
import DivBottom from '../../../components/DivBottom/DivBottom';
const WeightHeight = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const styles = useStyles();
	const trainingInfo = useSelector((store) => store.user.trainingInfo);

	const [selectedWeight, setSelectedWeight] = useState('');
	const [selectedHeight, setSelectedHeight] = useState('');

	// Función para validar el número del input PESO
	const onWeightChange = (event) => {
		const validCharacters = '01234567890.';
		const { value } = event.target;

		let flag = true;
		const charIsValid = () => {
			for (let i = 1; i < 12; i++) {
				if (value[value.length - 1] === validCharacters[i]) {
					flag = true;
					break;
				} else {
					flag = false;
				}
			}
		};
		charIsValid();

		if (flag) {
			setSelectedWeight(parseInt(value));
		}
		if (value === '') {
			setSelectedWeight('');
		}
	};

	// Función para validar el número del input ALTURA
	const onHeightChange = (event) => {
		const validCharacters = '01234567890.';
		const { value } = event.target;

		let flag = true;
		const charIsValid = () => {
			for (let i = 1; i < 12; i++) {
				if (value[value.length - 1] === validCharacters[i]) {
					flag = true;
					break;
				} else {
					flag = false;
				}
			}
		};
		charIsValid();

		if (flag) {
			setSelectedHeight(value);
		}
		if (value === '' || value === NaN) {
			setSelectedHeight('');
		}
	};

	const [data, error, apiCall] = useFetch({
		service: () =>
			putTrainingInfo({
				...trainingInfo,
				weight: selectedWeight,
				height: selectedHeight,
			}),
		globalLoader: true,
		callback: () => {
			apiCallGetUserInfo()
		},
		successAlert: true
	});

	const [infoData, infoDataError, apiCallGetUserInfo] = useFetch({
		service: () => getUserInfo(),
		globalLoader: true,
		callback: () => {
			dispatch(getUserInfoAction(infoData?.user))
			navigate(`/${PATHS.DASHBOARD}`)
		}
	})

	const bannerTexts = [
		<Text
			justify='start'
			text={t('welcome.weightHeight.title')}
			size='4'
			bold
			color={2}
			className='px-4'
		/>,
	];

	return (
		<MainContainer
			back={true}
			bg='1'
			color='2'
			backgroundImg='mainGoals'
			banner
			bannerTexts={bannerTexts}
		>
			<DivTop className='mt-5 pt-5'>
				<div className={styles.container}>
					<div className={styles.input1}>
						<InputDivided
							id='weight'
							text1={t('welcome.weightHeight.weight')}
							text2={t('welcome.weightHeight.kilos')}
							onChange={onWeightChange}
							type='text'
							min='20'
							max='400'
							maxLength='3'
							placeholder='0'
							value={selectedWeight}
						/>
					</div>

					<div className={styles.input2}>
						<InputDivided
							id='height'
							text1={t('welcome.weightHeight.height')}
							text2={t('welcome.weightHeight.meters')}
							onChange={onHeightChange}
							type='text'
							min='1'
							max='3'
							maxLength='4'
							placeholder='1.00'
							value={selectedHeight}
						/>
					</div>
				</div>
			</DivTop>
			<DivBottom>

				<Button
					text={t('welcome.weightHeight.enter')}
					onClick={apiCall}
					disabled={!selectedWeight || !selectedHeight}
				/>
			</DivBottom>
		</MainContainer>
	);
};

export default WeightHeight;
