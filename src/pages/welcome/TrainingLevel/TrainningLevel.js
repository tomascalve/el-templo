import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLevelToTrainingInfo } from '../../../redux/user';
import './TrainningLevel.scss';

import Text from '../../../components/Text/Text';
import { PATHS } from '../../../constants/paths';
import InputRange from '../../../components/InputRange/InputRange';
import ButtonPagination from '../../../components/ButtonPagination/ButtonPagination';
import MainContainer from '../../../components/MainContainer/MainContainer';
import useStyles from './useStyles';
import DivTop from '../../../components/DivTop/DivTop';
import DivBottom from '../../../components/DivBottom/DivBottom';

const TrainingLevel = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const styles = useStyles();
	const { trainingLevel } = useSelector((store) => store?.user?.trainingInfo);

	const [selectedLevel, setSelectedLevel] = useState(
		trainingLevel === 0 ? 1 : trainingLevel
	);

	const changeLevel = (e) => setSelectedLevel(parseInt(e.target.value));

	const toWeightAndHeight = () => {
		dispatch(
			addLevelToTrainingInfo({
				trainingLevel: selectedLevel,
			})
		);
		navigate(`/${PATHS.WEIGHT_HEIGHT}`);
	};

	const bannerTexts = [
		<Text
			justify='start'
			text={t('welcome.trainingLevel.title')}
			size='4'
			bold
			color={2}
			className='px-4'
		/>
	]

	return (
		<MainContainer alignCenter back bg='1' color='2' backgroundImg='mainGoals' banner bannerTexts={bannerTexts}>

			<DivTop	>
				<div
					className='col-12 d-flex flex-column justify-content-center align-items-center'
					style={{ paddingTop: '50%' }}
				>
					<Text text={t(`welcome.trainingLevel.level${selectedLevel}`)} color='2' size='1' />
					<InputRange
						id='level'
						min='1'
						max='5'
						defaultValue={selectedLevel}
						onChange={changeLevel}
					/>

					<div className={styles.text}>
						<div style={{ marginTop: '-23px' }}>
							<Text
								text={t('welcome.trainingLevel.amateur')}
								color='2'
								size='1'
							/>
						</div>
						<div style={{ marginTop: '-25px' }}>
							<Text
								text={t('welcome.trainingLevel.professional')}
								color='2'
								size='1'
							/>
						</div>
					</div>
				</div>
			</DivTop>
			<DivBottom className='align-items-end' marginBottom={-30} >
				<div className='col-12 d-flex justify-content-end' >
					<ButtonPagination
						direction='right'
						onClick={toWeightAndHeight}
					/>
				</div>
			</DivBottom>
		</MainContainer>
	);
};

export default TrainingLevel;
