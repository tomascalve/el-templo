const defaultValue = {
    trainingType: '',
    currentDay: 1,
    currentBlock: 1,
    exercise1: {},
    exercise2: {},
    currentExerciseNumber: 1
};

const SET_EXERCISE = 'SET_EXERCISE';
const NEXT_EXERCISE = 'NEXT_EXERCISE';

export default function ExerciseReducer(state = defaultValue, { type, payload }) {

    switch (type) {
        case SET_EXERCISE: return { ...state, ...payload };
        case NEXT_EXERCISE: return { ...state, currentExerciseNumber: payload };
        default: return state;
    }
};

export const setExerciseAction = training => dispatch => {
    dispatch({
        type: SET_EXERCISE,
        payload: training
    })
}

export const nextExerciseAction = () => dispatch => {

    dispatch({
        type: NEXT_EXERCISE,
        payload: 2
    })
}