import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import useFetch from '../../hooks/useFetch';
import { editAllTrainings, getExercises, getRoutineById } from '../../services/admin';
import TrainingCardInputs from '../TrainingCardInputs/TrainingCardInputs';
import Button from '../Button/Button'
import { eachCardIsCompleted } from '../../utils/objectUtils';
import { useNavigate } from 'react-router-dom';

const EditRoutineDay = ({ trainingDayId }) => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const [routineIds, setRoutineIds] = useState({})
    const [eachCard, setEachCard] = useState({})

    const [trainingResponse] = useFetch({
        service: () => getRoutineById({ id: trainingDayId }),
        globalLoader: true,
        callNow: true,
        callback: () => {
            const { routine } = trainingResponse?.response;
            setRoutineIds({
                adaptation1: routine?.adaptation1?._id,
                adaptation2: routine?.adaptation2?._id,
                strength: routine?.strength?._id,
                hypertrophy: routine?.hypertrophy?._id,
                suplementary: routine?.suplementary?._id,
            });
            setEachCard({
                adaptation1: {
                    trainingType: 'adaptation1',
                    exercise1: {
                        exerciseId: routine?.adaptation1?.exercise1?.exerciseId,
                        reps: routine?.adaptation1?.exercise1?.reps,
                        times: routine?.adaptation1?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.adaptation1?.exercise2?.exerciseId,
                        reps: routine?.adaptation1?.exercise2?.reps,
                        times: routine?.adaptation1?.exercise2?.times
                    }
                },
                adaptation2: {
                    trainingType: 'adaptation2',
                    exercise1: {
                        exerciseId: routine?.adaptation2?.exercise1?.exerciseId,
                        reps: routine?.adaptation2?.exercise1?.reps,
                        times: routine?.adaptation2?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.adaptation2?.exercise2?.exerciseId,
                        reps: routine?.adaptation2?.exercise2?.reps,
                        times: routine?.adaptation2?.exercise2?.times
                    }
                },
                strength: {
                    trainingType: 'strength',
                    exercise1: {
                        exerciseId: routine?.strength?.exercise1?.exerciseId,
                        reps: routine?.strength?.exercise1?.reps,
                        times: routine?.strength?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.strength?.exercise2?.exerciseId,
                        reps: routine?.strength?.exercise2?.reps,
                        times: routine?.strength?.exercise2?.times
                    }
                },
                hypertrophy: {
                    trainingType: 'hypertrophy',
                    exercise1: {
                        exerciseId: routine?.hypertrophy?.exercise1?.exerciseId,
                        reps: routine?.hypertrophy?.exercise1?.reps,
                        times: routine?.hypertrophy?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.hypertrophy?.exercise2?.exerciseId,
                        reps: routine?.hypertrophy?.exercise2?.reps,
                        times: routine?.hypertrophy?.exercise2?.times
                    }
                },
                suplementary: {
                    trainingType: 'suplementary',
                    exercise1: {
                        exerciseId: routine?.suplementary?.exercise1?.exerciseId,
                        reps: routine?.suplementary?.exercise1?.reps,
                        times: routine?.suplementary?.exercise1?.times
                    },
                    exercise2: {
                        exerciseId: routine?.suplementary?.exercise2?.exerciseId,
                        reps: routine?.suplementary?.exercise2?.reps,
                        times: routine?.suplementary?.exercise2?.times
                    }
                },

            })
        },
    });

    const [exercisesListResponse] = useFetch({
        service: () => getExercises({ offset: 0, search: '', limit: 100000}),
        globalLoader: true,
        callNow: true,
    });

    const [savedRoutine, savedRoutineError, savedRoutineApiCall] = useFetch({
        service: () => editAllTrainings(routineIds, eachCard),
        globalLoader: true,
        callback: () => { navigate(-1) },
        successAlert: true
    })

    const onChangeInput = (e, exerciseType) => {
        setEachCard({
            ...eachCard,
            [exerciseType]: {
                ...eachCard[exerciseType],
                [e.exerciseNumber]: {
                    ...eachCard[exerciseType][e.exerciseNumber],
                    [e.name]: e.name === 'exerciseId' ? e.value : parseInt((e.value.charAt(0) === '0' ? e.value.substring(1) : e.value))
                },
            }
        })
    }

    return (
        <div className='col-12 d-flex flex-column align-items-center'>
            <TrainingCardInputs
                title={t('admin.routines.adaptation1')}
                exercise1={eachCard?.adaptation1?.exercise1}
                exercise2={eachCard?.adaptation1?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'adaptation1')}
            />
            <TrainingCardInputs
                title={t('admin.routines.adaptation2')}
                exercise1={eachCard?.adaptation2?.exercise1}
                exercise2={eachCard?.adaptation2?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'adaptation2')}

            />
            <TrainingCardInputs
                title={t('admin.routines.strength')}
                exercise1={eachCard?.strength?.exercise1}
                exercise2={eachCard?.strength?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'strength')}

            />
            <TrainingCardInputs
                title={t('admin.routines.hypertrophy')}
                exercise1={eachCard?.hypertrophy?.exercise1}
                exercise2={eachCard?.hypertrophy?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'hypertrophy')}

            />
            <TrainingCardInputs
                title={t('admin.routines.suplementary')}
                exercise1={eachCard?.suplementary?.exercise1}
                exercise2={eachCard?.suplementary?.exercise2}
                exercisesListResponse={exercisesListResponse}
                onChange={(e) => onChangeInput(e, 'suplementary')}

            />
            <Button
                className='mt-3 mb-4'
                onClick={savedRoutineApiCall}
                text={t('admin.routines.saveRoutine')}
                size={2}
                disabled={!eachCardIsCompleted(eachCard)}
            />
        </div>
    );
};

export default EditRoutineDay