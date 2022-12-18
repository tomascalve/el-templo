import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../axios/axiosInstance';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './mainGoals.scss';

import Cross from '../../../assets/Icons/Cross';
import Text from '../../../components/Text/Text';
import MainContainer from '../../../components/MainContainer/MainContainer';
import './mainGoals.scss';
import { PATHS } from '../../../constants/paths';
import { useDispatch, useSelector } from 'react-redux';
import { addGoalsToTrainingInfo } from '../../../redux/user';
import ButtonPagination from '../../../components/ButtonPagination/ButtonPagination';
import useStyles from './useStyles';
import DivTop from '../../../components/DivTop/DivTop';
import DivBottom from '../../../components/DivBottom/DivBottom';
import { randomHexadecimal } from '../../../utils/mathUtils';

const MainGoals = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const styles = useStyles();
	const trainingGoals = useSelector((store) => store.user.trainingInfo.goals);

	const [arrGoals, setArrGoals] = useState([]);
	const [selectedGoals, setSelectedGoals] = useState(trainingGoals);

	const getGoals = async () => {
		const response = await axiosInstance.get('/user/get-goals');
		const goals = await response?.data?.data?.goals;
		setArrGoals(goals);
	};

	const toTrainingLevel = () => {
		dispatch(
			addGoalsToTrainingInfo({
				goals: selectedGoals,
			})
		);
		navigate(`/${PATHS.TRAINING_LEVEL}`);
	};

	const addNewGoal = (goal) => {
		const auxArr = [...selectedGoals];
		const empty = auxArr.findIndex((e) => e === '');
		auxArr[empty] = goal;
		setSelectedGoals(auxArr);
	};

	const deleteGoal = (index) => {
		const auxArr = [...selectedGoals];
		auxArr[index] = '';
		setSelectedGoals(auxArr);
	};

	const disableBtnNext = () => {
		if (
			selectedGoals[0] === '' ||
			selectedGoals[1] === '' ||
			selectedGoals[2] === ''
		) {
			return 'disabled';
		} else {
			return '';
		}
	};
	useEffect(() => {
		getGoals();
	}, []);

	useEffect(() => {
		setSelectedGoals(trainingGoals);
	}, [trainingGoals]);

	const bannerTexts = [
		<Text
			justify='start'
			text={t('welcome.goals.tellUs')}
			size='4'
			bold
			color={2}
			className='px-4'
		/>,
		<Text
			text={t('welcome.goals.mainGoals')}
			size='3'
			bold
			color={2}
			justify='start'
			className='px-4'
		/>
	]

	return (
		<MainContainer back={true} bg='1' color='2' backgroundImg='mainGoals' banner bannerTexts={bannerTexts} col='12'>
			<DivTop>

				<div className={styles.container}>
					<div
						className={styles.DG0}
						onClick={() => deleteGoal(0)}
					>
						<p className='numbers'>1</p>
						<div className={styles.selected0}>
							<p
								className='goals goal1'
								style={{ marginLeft: '23px' }}
							>
								{t(`welcome.goals.${selectedGoals[0]}`)}
							</p>
							<div className={styles.cross0}>
								<Cross />
							</div>
						</div>
					</div>

					<div
						className={styles.DG1}
						onClick={() => deleteGoal(1)}
					>
						<p className='numbers'>2</p>
						<div className={styles.selected1}>
							<p className='goals '>
								{t(`welcome.goals.${selectedGoals[1]}`)}
							</p>
							<div className={styles.cross1}>
								<Cross />
							</div>
						</div>
					</div>

					<div
						className={styles.DG2}
						onClick={() => deleteGoal(2)}
					>
						<p className='numbers'>3</p>
						<div className={styles.selected2}>
							<p className='goals'>
								{t(`welcome.goals.${selectedGoals[2]}`)}
							</p>
							<div className={styles.cross2}>
								<Cross />
							</div>
						</div>
					</div>
				</div>

				<div className={styles.btn1}>
					{arrGoals?.map(
						(goal, i) =>
							!selectedGoals.includes(goal) && (
								<button
									key={i}
									className='goals-tags'
									onClick={() => addNewGoal(goal)}
								>
									<Text
									key={randomHexadecimal()}
										text={t(`welcome.goals.${goal}`)}
										size='1'
										color={2}
									/>
								</button>
							)
					)}
				</div>
			</DivTop>

			<DivBottom marginBottom={-30} >
				<div className='col-11 d-flex justify-content-end' >
					<ButtonPagination
						disabled={
							selectedGoals[0] === '' ||
							selectedGoals[1] === '' ||
							selectedGoals[2] === ''
						}
						onClick={toTrainingLevel}
						className={disableBtnNext()}
					/>
				</div>
			</DivBottom>
		</MainContainer>
	);
};

export default MainGoals;
