import useStyles from './useStyles';
import './TrainingCardInputs.scss';
import Text from '../Text/Text';
import { useTranslation } from 'react-i18next';
import { langUpperCased } from '../../utils/localStorage';

const TrainingCardInputs = ({
    title = 'Title',
    exercise1,
    exercise2,
    exercisesListResponse,
    onChange,
}) => {
    const { t } = useTranslation()
    const styles = useStyles();

    const onChangeInput = (e, exerciseNumber) => {
        const { name, value } = e.target
        onChange({ name, value: value.replace(/^d/g, ''), exerciseNumber });
    }

    return (
        <div className={styles.trainingCardContainer} >
            <div className={styles.titleContainer}>
                <Text text={title} />
            </div>

            <div className={styles.exercisesContainer}>
                <div className={styles.exerciseLeft}>

                    <div className={styles.inputsContainer}>
                        <div>
                            <select
                                className={styles.inputSelect}
                                value={exercise1?.exerciseId}
                                onChange={(e) => onChangeInput(e, 'exercise1')}
                                name='exerciseId'
                            >
                                <option hidden={true}>Elegir</option>
                                {exercisesListResponse?.exercises?.map(exercise => {
                                    return (
                                        <option
                                            key={exercise?._id}
                                            value={exercise?._id}
                                        >
                                            {exercise[`title${langUpperCased()}`]}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={styles.inputNumberContainer}>
                            <div className={styles.inputNumberText}>
                                <Text text={`${t('admin.routines.reps')}:`} size='1' />
                            </div>
                            <input
                                value={exercise1?.reps ? exercise1?.reps : ''}
                                className={styles.inputNumber}
                                onChange={(e) => onChangeInput(e, 'exercise1')}
                                
                                name='reps'
                            />
                        </div>

                        <div className={styles.inputNumberContainer}>
                            <div className={styles.inputNumberText}>
                                <Text text={`${t('admin.routines.times')}:`} size='1' />
                            </div>
                            <input
                                value={exercise1?.times ? exercise1?.times : ''}
                                className={styles.inputNumber}
                                onChange={(e) => onChangeInput(e, 'exercise1')}
                                name='times'
                            />
                        </div>
                    </div>

                    {/* <>
                        <Text text={exercise1?.exercise[`title${lang}`]} size='1' bold />
                        <Text text={`${t('admin.routines.reps')}: ${exercise1?.reps}`} size='1' />
                        <Text text={`${t('admin.routines.times')}: ${exercise1?.times}`} size='1' />
                    </> */}

                </div>

                <div className={styles.exerciseRight}>

                    <div className={styles.inputsContainer}>
                        <div>
                            <select
                                value={exercise2?.exerciseId}
                                className={styles.inputSelect}
                                onChange={(e) => onChangeInput(e, 'exercise2')}
                                name='exerciseId'
                            >
                                <option hidden={true}>Elegir</option>
                                {exercisesListResponse?.exercises?.map(exercise => {
                                    return (
                                        <option
                                            key={exercise?._id}
                                            value={exercise?._id}
                                        >
                                            {exercise[`title${langUpperCased()}`]}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={styles.inputNumberContainer}>
                            <div className={styles.inputNumberText}>
                                <Text text={`${t('admin.routines.reps')}:`} size='1' />
                            </div>
                            <input
                                value={exercise2?.reps ? exercise2?.reps : ''}
                                className={styles.inputNumber}
                                onChange={(e) => onChangeInput(e, 'exercise2')}
                                
                                name='reps'
                            />
                        </div>

                        <div className={styles.inputNumberContainer}>
                            <div className={styles.inputNumberText}>
                                <Text text={`${t('admin.routines.times')}:`} size='1' />
                            </div>
                            <input
                                value={exercise2?.times ? exercise2?.times : ''}
                                className={styles.inputNumber}
                                onChange={(e) => onChangeInput(e, 'exercise2')}
                                
                                name='times'
                            />
                        </div>
                    </div>

                    {/* <>
                        <Text text={exercise2?.exercise[`title${lang}`]} size='1' bold />
                        <Text text={`${t('admin.routines.reps')}: ${exercise2?.reps}`} size='1' />
                        <Text text={`${t('admin.routines.times')}: ${exercise2?.times}`} size='1' />
                    </> */}


                </div>
            </div>
        </div >
    );
};

export default TrainingCardInputs;
