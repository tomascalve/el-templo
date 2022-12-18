import useStyles from './useStyles';
import './TrainingCard.scss';
import Text from '../Text/Text';
import { useTranslation } from 'react-i18next';
import { langUpperCased } from '../../utils/localStorage';

const TrainingCard = ({
    title = 'Title',
    exercise1,
    exercise2,
    isEditing,
    exerciseList,
    onChange,
    isActive,
}) => {
    const { t } = useTranslation()
    const styles = useStyles({ isActive, isEditing });

    const onChangeInput = (e, exerciseNumber) => {
        const { name, value } = e.target
        onChange({ name, value, exerciseNumber });
    }

    return (
        <div className={styles.trainingCardContainer} >
            <div className={styles.titleContainer}>
                <Text text={title} />
            </div>

            <div className={styles.exercisesContainer}>
                <div className={styles.exerciseLeft}>
                    {isEditing ?
                        <div className={styles.inputsContainer}>
                            <div>
                                <select
                                    className={styles.inputSelect}
                                    value={exercise1?.exerciseId}
                                    onChange={(e) => onChangeInput(e, 'exercise1')}
                                    name='exerciseId'
                                >
                                    <option hidden={true}>Elegir</option>
                                    {exerciseList?.exercises?.map(exercise => {
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
                                    value={exercise1?.reps ? exercise1?.reps : '0'}
                                    className={styles.inputNumber}
                                    onChange={(e) => onChangeInput(e, 'exercise1')}
                                    type='number'
                                    name='reps'
                                />
                            </div>

                            <div className={styles.inputNumberContainer}>
                                <div className={styles.inputNumberText}>
                                    <Text text={`${t('admin.routines.times')}:`} size='1' />
                                </div>
                                <input
                                    value={exercise1?.times ? exercise1?.times : '0'}
                                    className={styles.inputNumber}
                                    onChange={(e) => onChangeInput(e, 'exercise1')}
                                    type='number'
                                    name='times'
                                />
                            </div>
                        </div>
                        :
                        <>
                            <Text text={exercise1?.exercise[`title${langUpperCased()}`]} size='1' bold />
                            <Text text={`${t('admin.routines.reps')}: ${exercise1?.reps}`} size='1' />
                            <Text text={`${t('admin.routines.times')}: ${exercise1?.times}`} size='1' />
                        </>
                    }
                </div>

                <div className={styles.exerciseRight}>
                    {isEditing ?
                        <div className={styles.inputsContainer}>
                            <div>
                                <select
                                    value={exercise2?.exerciseId}
                                    className={styles.inputSelect}
                                    onChange={(e) => onChangeInput(e, 'exercise2')}
                                    name='exerciseId'
                                >
                                    <option hidden={true}>Elegir</option>
                                    {exerciseList?.exercises?.map(exercise => {
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
                                    value={exercise2?.reps ? exercise2?.reps : '0'}
                                    className={styles.inputNumber}
                                    onChange={(e) => onChangeInput(e, 'exercise2')}
                                    type='number'
                                    name='reps'
                                />
                            </div>

                            <div className={styles.inputNumberContainer}>
                                <div className={styles.inputNumberText}>
                                    <Text text={`${t('admin.routines.times')}:`} size='1' />
                                </div>
                                <input
                                    value={exercise2?.times ? exercise2?.times : '0'}
                                    className={styles.inputNumber}
                                    onChange={(e) => onChangeInput(e, 'exercise2')}
                                    type='number'
                                    name='times'
                                />
                            </div>
                        </div>
                        :
                        <>
                            <Text text={exercise2?.exercise[`title${langUpperCased()}`]} size='1' bold />
                            <Text text={`${t('admin.routines.reps')}: ${exercise2?.reps}`} size='1' />
                            <Text text={`${t('admin.routines.times')}: ${exercise2?.times}`} size='1' />
                        </>
                    }

                </div>
            </div>
        </div >
    );
};

export default TrainingCard;
