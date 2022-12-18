import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProfileImgAndXP from "../../components/ProfileImgAndXP/ProfileImgAndXP";
import RoutineCards from "../../components/RoutineCards/RoutineCards";
import RoutineLevel from "../../components/RoutineLevel/RoutineLevel";
import { PATHS } from "../../constants/paths";
import useFetch from "../../hooks/useFetch";
import { setExerciseAction } from "../../redux/exercise";
import { getMyExercise } from "../../services/training";
import { BACK_RESPONSE } from '../../constants/responses';
import { randomHexadecimal } from "../../utils/mathUtils";

const DAYS = [1, 2, 3, 4, 5, 6, 7, 8];

const TrainingDashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { trainingType, currentBlock, currentDay } = useSelector(state => state.exercise);
    const [noMoreExercise, setNoMoreExercise] = useState(false);

    const { t } = useTranslation();

    const [myExercise, myExerciseError, apiCallMyExercise] = useFetch({
        service: () => getMyExercise(),
        globalLoader: true,
        callNow: true,
        callback: () => {
            if (myExercise?.response?.statusCode === BACK_RESPONSE.NO_MORE_EXERCISE) {
                setNoMoreExercise(true);
            }
            const trainingTypeAux = myExercise?.response?.trainingType;
            const { exercise1, exercise2 } = myExercise?.response?.routine?.[trainingTypeAux];
            dispatch(setExerciseAction({
                trainingType: trainingTypeAux,
                exercise1,
                exercise2,
                currentDay: myExercise?.response?.currentDay,
                currentBlock: myExercise?.response?.currentBlock,
                currentExerciseNumber: 1
            }));

        }
    });

    const onClick = () => {
        navigate(`/${PATHS.TRAINING_ROUTINE}`);
    }

    return (
        <MainContainer
            back
            color={2}
            bg={1}
            col={12}
            text={t('trainingDashboard.index')}
            navbar
            scroll
            alignCenter
        >
            <ProfileImgAndXP />
            <RoutineCards currentBlock={currentBlock} />
            {/* Days */}
            {trainingType && <div className="my-4 col-12">
                {DAYS.map(day => <RoutineLevel
                key={randomHexadecimal()}
                    onClick={onClick}
                    trainingType={trainingType}
                    text={t('global.day', { number: day })}
                    done={day < currentDay}
                    active={day === currentDay && !noMoreExercise && !!myExercise}
                />)}
            </div>}
        </MainContainer>
    )
}

export default TrainingDashboard
