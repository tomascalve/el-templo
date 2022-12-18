import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { editAllTrainings, getExercises, getRoutineById } from '../../services/admin';
import TrainingCard from '../TrainingCard/TrainingCard';
import Button from '../Button/Button'
import { eachCardIsCompleted } from '../../utils/objectUtils';

const RoutineTable = ({
    adaptation1,
    adaptation2,
    strength,
    hypertrophy,
    suplementary,
    isEditing,
    exerciseList,
    onSubmit,
    onChangeInput,
    trainingType
}) => {
    const { t } = useTranslation()
    // const navigate = useNavigate();

    return (
        <div className='col-12 d-flex flex-column align-items-center'>
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.adaptation1')}
                exercise1={adaptation1?.exercise1}
                exercise2={adaptation1?.exercise2}
                exerciseList={exerciseList}
                onChange={(e) => onChangeInput(e, 'adaptation1')}
                isActive={trainingType === 'adaptation1'}
            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.adaptation2')}
                exercise1={adaptation2?.exercise1}
                exercise2={adaptation2?.exercise2}
                exerciseList={exerciseList}
                onChange={(e) => onChangeInput(e, 'adaptation2')}
                isActive={trainingType === 'adaptation2'}

            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.strength')}
                exercise1={strength?.exercise1}
                exercise2={strength?.exercise2}
                exerciseList={exerciseList}
                onChange={(e) => onChangeInput(e, 'strength')}
                isActive={trainingType === 'strength'}

            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.hypertrophy')}
                exercise1={hypertrophy?.exercise1}
                exercise2={hypertrophy?.exercise2}
                exerciseList={exerciseList}
                onChange={(e) => onChangeInput(e, 'hypertrophy')}
                isActive={trainingType === 'hypertrophy'}

            />
            <TrainingCard
                isEditing={isEditing}
                title={t('admin.routines.suplementary')}
                exercise1={suplementary?.exercise1}
                exercise2={suplementary?.exercise2}
                exerciseList={exerciseList}
                onChange={(e) => onChangeInput(e, 'suplementary')}
                isActive={trainingType === 'suplementary'}

            />
            {isEditing &&
                <Button
                    className='mt-3 mb-4'
                    onClick={onSubmit}
                    text={t('admin.routines.saveRoutine')}
                    size={2}
                    disabled={!eachCardIsCompleted({ adaptation1, adaptation2, strength, hypertrophy, suplementary })}
                />
            }
        </div>
    );
};

export default RoutineTable