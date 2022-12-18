import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import MainContainer from '../../../components/MainContainer/MainContainer'
import { PATHS } from '../../../constants/paths';
import useFetch from '../../../hooks/useFetch';
import { getExercises } from '../../../services/admin';
import Table from '../../../components/Table/Table';
import UseTable from '../../../hooks/useTable';
import { useDispatch } from 'react-redux';
import { replaceRouteName } from '../../../redux/route';
import { langUpperCased } from '../../../utils/localStorage'
import { randomHexadecimal } from '../../../utils/mathUtils';

const AdminExercises = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [exercisesListFetch, exercisesListError, apiCallExercisesList] = useFetch({
        service: () => getExercises({ offset: tableData.offset, search: tableData.search }),
        callNow: true,
        globalLoader: true,
        callback: () => { },
    });

    const tableData = UseTable({ apiCall: apiCallExercisesList });


    const navigateToCreateExercise = () => {
        navigate(`/${PATHS.ADMIN_CREATE_EDIT_EXERCISE}`)
    }
    const navigateToEditExercise = (id) => {
        navigate(`/${PATHS.ADMIN_CREATE_EDIT_EXERCISE}`, { state: { id: id } })
    }

    useEffect(() => {
        dispatch(replaceRouteName(t('admin.adminExercises.index')))
    }, [])

    return (
        <MainContainer col='12' scroll>
            <Table
                paginator
                total={exercisesListFetch?.total}
                {...tableData}
                columns={[
                    { title: t('admin.userTable.name'), field: `title${langUpperCased()}` },
                    { title: t('global.edit'), field: `edit` },

                ]}
                extraSearch={<Button
                    text={t('admin.adminExercises.createExercise')}
                    onClick={navigateToCreateExercise}
                    size='3'
                    type={2}
                />}
                data={exercisesListFetch?.exercises.map(e => ({
                    ...e,
                    edit: <Button key={randomHexadecimal()} text={t('global.edit')} size={3} onClick={() => navigateToEditExercise(e._id)} />
                }))}
            />

        </MainContainer>
    )
}

export default AdminExercises