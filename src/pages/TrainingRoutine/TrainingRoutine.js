import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import DivTop from "../../components/DivTop/DivTop";
import DivBottom from "../../components/DivBottom/DivBottom";
import Button from "../../components/Button/Button";
import { getExerciseById } from "../../services/admin";
import { makeTraining } from "../../services/training";
import useFetch from "../../hooks/useFetch";
import CardInfoTraining from "../../components/CardInfoTrainingImg/CardInfoTraining";
import { langUpperCased } from "../../utils/localStorage";
import SubtitleBar from "../../components/SubtitleBar/SubtitleBar";
import SkipRoutine from "./SkipRoutine/SkipRoutine";
import { useState } from "react";
import { TRAINING_TYPES } from "../../constants/training";
import { useSelector } from "react-redux";
import { PATHS } from "../../constants/paths";
import number1 from '../../assets/images/1.png';
import number2 from '../../assets/images/2.jpg';

const TrainingRoutine = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const lang = langUpperCased();

    const [showSkip, setShowSkip] = useState(true);

    const { exercise1, exercise2, currentBlock, currentDay, trainingType, currentExerciseNumber } = useSelector(state => state.exercise);
    if (!exercise1 || !exercise2 || !currentBlock || !currentDay) {
        navigate(-1);
    }

    const [exercise1Data] = useFetch({
        service: () => getExerciseById({ id: exercise1?.exerciseId }),
        callNow: true,
        globalLoader: true
    })

    const [exercise2Data] = useFetch({
        service: () => getExerciseById({ id: exercise2?.exerciseId }),
        callNow: true,
        globalLoader: true
    })

    const [makeTrainingData, errorMakeTraining, makeTrainingApiCall] = useFetch({
        service: () => makeTraining({ trainingType, currentBlock, currentDay }),
        globalLoader: true,
        callback: () => {
            navigate(`/${PATHS.TRAINING_DASHBOARD}`)
        }
    })


    return (
        <MainContainer
            back
            color={2}
            bg={1}
            text={t('user.training.index')}
            navbar
            col={12}
            scroll
        >
            <DivTop>
                <SubtitleBar text={`
                 ${t('admin.routines.block')}: ${currentBlock} -
                  ${t('admin.routines.day')}: ${currentDay} - ${t(`routineTypes.${trainingType}`)}`
                } />
                {showSkip && (trainingType === TRAINING_TYPES.ADAPTATION1 || trainingType === TRAINING_TYPES.ADAPTATION2) && <SkipRoutine onClick={makeTrainingApiCall} onClose={() => setShowSkip(false)} />}
                <div className="col-11 d-flex flex-column align-items-center m-auto">

                    <CardInfoTraining done={currentExerciseNumber !== 1} img={number1} tags={exercise1Data?.exercise?.tags.map(t => t[`title${lang}`])} text={exercise1?.exercise?.[`title${lang}`]} />
                    <CardInfoTraining img={number2} disabled={currentExerciseNumber !== 2} tags={exercise2Data?.exercise?.tags.map(t => t[`title${lang}`])} text={exercise2?.exercise?.[`title${lang}`]} />
                </div>
            </DivTop>
            <DivBottom className="col-12">
                <div className="col-11 m-auto">
                    <Button text={t('global.start')} onClick={() => navigate(`/${PATHS.MAKE_TRAINING}`)} />
                </div>
            </DivBottom>

        </MainContainer>
    );
}

export default TrainingRoutine