import { useTranslation } from 'react-i18next';
import EllipseChecked from '../../assets/symbols/EllipseChecked';
import { TRAINING_TYPES } from '../../constants/training';
import Text from '../Text/Text';
import './RoutineLevel.scss';
import TrainingImg from './TrainingImg/TrainingImg';
import useStyles from './useStyles';
import adaptation1 from '../../assets/images/adaptation.jpg'
import adaptation2 from '../../assets/images/adaptation2.jpg'
import strength from '../../assets/images/strength.jpg'
import hipertrofia from '../../assets/images/hipertrofia.jpg'
import suplementary from '../../assets/images/suplementary.jpg';

const TRAINING_VALUES = {
    [TRAINING_TYPES.ADAPTATION1]: 0,
    [TRAINING_TYPES.ADAPTATION2]: 1,
    [TRAINING_TYPES.STRENGTH]: 2,
    [TRAINING_TYPES.HYPERTROPHY]: 3,
    [TRAINING_TYPES.SUPLEMENTARY]: 4,
}

const RoutineLevel = ({ text, active, done, trainingType, onClick }) => {

    const checkDoneExercise = (type) => {
        let isDone = false;
        if(TRAINING_VALUES[type] < TRAINING_VALUES[trainingType]){
            isDone = true;
        }
        return isDone;
    }

    const { t } = useTranslation();

    const styles = useStyles({ active, done });

    const getTextColor = () => {
        let color = 0;
        if (active) {
            color = 6;
        } else if (done) {
            color = 'done';
        }
        return color;
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <Text color={getTextColor()} bold={active} text={text} />
                {done && <EllipseChecked />}
                {active &&
                    <div className={styles.ellipseActive}><div className={styles.ellipseActiveInner}></div>
                    </div>
                }
            </div>
            {active && <div className={styles.trainings}>
                <TrainingImg done={checkDoneExercise(TRAINING_TYPES.ADAPTATION1)} img={adaptation1} onClick={() => onClick(TRAINING_TYPES.ADAPTATION1)} active={trainingType === TRAINING_TYPES.ADAPTATION1} text={t('routineTypes.adaptation1')} />
                <TrainingImg done={checkDoneExercise(TRAINING_TYPES.ADAPTATION2)} img={adaptation2} onClick={() => onClick(TRAINING_TYPES.ADAPTATION2)} active={trainingType === TRAINING_TYPES.ADAPTATION2} text={t('routineTypes.adaptation2')} />
                <TrainingImg done={checkDoneExercise(TRAINING_TYPES.STRENGTH)} img={strength} onClick={() => onClick(TRAINING_TYPES.STRENGTH)} active={trainingType === TRAINING_TYPES.STRENGTH} text={t('routineTypes.strength')} />
                <TrainingImg done={checkDoneExercise(TRAINING_TYPES.HYPERTROPHY)} img={hipertrofia} onClick={() => onClick(TRAINING_TYPES.HYPERTROPHY)} active={trainingType === TRAINING_TYPES.HYPERTROPHY} text={t('routineTypes.hypertrophy')} />
                <TrainingImg done={checkDoneExercise(TRAINING_TYPES.SUPLEMENTARY)} img={suplementary} onClick={() => onClick(TRAINING_TYPES.SUPLEMENTARY)} active={trainingType === TRAINING_TYPES.SUPLEMENTARY} text={t('routineTypes.suplementary')} />
            </div>}
        </div>
    )
}

export default RoutineLevel
