import { privateGet, privatePost } from '../axios/privateInstance';

export const getMyExercise = () => {
	return privateGet({
		url: `/train/training/get-my-exercise`
	})
}

export const getNivelationExercises = () => privateGet({ url: `get-nivelation` });

export const makeNivelation = (data) => privatePost({
	url: `/training/make-nivelation`, body: {
		results: data.map(d => ({
			id: d.id,
			count: d.count
		}))
	}
});

export const makeTraining = ({ trainingType, currentBlock, currentDay }) => privatePost({
	url: '/training/make-training', body: {
		routineBlockNumber: currentBlock,
		dayNumber: currentDay,
		trainingType
	}
});

