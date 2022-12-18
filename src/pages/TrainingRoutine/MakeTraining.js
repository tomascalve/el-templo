import MainContainer from "../../components/MainContainer/MainContainer"
import Exercise from "../../components/Exercise/Exercise"
import { useDispatch, useSelector } from "react-redux"
import { langUpperCased } from "../../utils/localStorage";
import { nextExerciseAction } from "../../redux/exercise";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { makeTraining } from "../../services/training";
import { PATHS } from "../../constants/paths";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { BACK_RESPONSE } from "../../constants/responses";

const MakeTraining = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { exercise1, exercise2, trainingType, currentDay, currentExerciseNumber, currentBlock } = useSelector(state => state.exercise);
    const currExercise = (currentExerciseNumber === 1 ? exercise1 : exercise2)?.exercise;
    const { reps, times } = (currentExerciseNumber === 1 ? exercise1 : exercise2);
    // const times = ;
    // const reps = ;
    const lang = langUpperCased();
    const navigate = useNavigate();


    const [data, error, apiCall] = useFetch({
        service: () => makeTraining({ trainingType, currentDay, currentBlock }),
        globalLoader: true,
        callback: () => {
            if (data?.response?.statusCode === BACK_RESPONSE.NO_MORE_EXERCISE) {
                navigate(`/${PATHS.CONGRATULATIONS}`)
            } else {

                navigate(`/${PATHS.TRAINING_DASHBOARD}`)
            }
        }
    })

    const onNext = () => {
        if (currentExerciseNumber === 1) {
            dispatch(nextExerciseAction());
            navigate(-1);
        } else {
            apiCall();
        }
    }

    return (
        <MainContainer
            scroll
            back
            text={t(`routineTypes.${trainingType}`)}
            color={2}
            col={12}
            bg={1}
        >
            <Exercise
                title={currExercise?.[`title${lang}`]}
                video={currExercise?.video}
                description={currExercise?.[`description${lang}`]}
                onNext={onNext}
                reps={reps}
                times={times}
            />
        </MainContainer>
    )
}

export default MakeTraining
