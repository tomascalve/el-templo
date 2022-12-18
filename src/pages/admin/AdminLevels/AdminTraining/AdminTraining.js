import React from 'react';
import MainContainer from '../../../../components/MainContainer/MainContainer';
import EditRoutineDay from '../../../../components/EditRoutineDay/EditRoutineDay';
import { useSelector } from 'react-redux';

const AdminTraining = () => {


    const { id } = useSelector( state => state.route.params );

    return (
        <MainContainer
            scroll
        >
            { id && <EditRoutineDay trainingDayId={id} />}
        </MainContainer>
    );
};

export default AdminTraining;
