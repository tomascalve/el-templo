import useFetch from "../../../../hooks/useFetch"
import { getNivelationExercises } from "../../../../services/training"
import useTable from '../../../../hooks/useTable';
import Table from '../../../../components/Table/Table';
import { useTranslation } from "react-i18next";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import Modal from '../../../../components/Modal/Modal';
import Input from "../../../../components/Input/Input";
import { editNivelation, deleteNivelation, createNivelation } from '../../../../services/admin';
import Text from "../../../../components/Text/Text";
import { langUpperCased } from "../../../../utils/localStorage";
import { randomHexadecimal } from "../../../../utils/mathUtils";

const defaultValue = {
    titleES: "",
    titleEN: "",
    lvl1: 0,
    lvl2: 0,
    lvl3: 0,
    lvl4: 0,
    lvl5: 0,
    lvl6: 0,
    lvl7: 0,
    lvl8: 0,
    lvl9: 0,
    lvl10: 0,
    lvl11: 0,
    lvl12: 0
};

const AdminNivelation = () => {

    const { t } = useTranslation();
    const [newOrEditNivelationData, setNewOrEditNivelationData] = useState(defaultValue);

    const [selectedDeleteNivelation, setSelectedNivelation] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [type, setType] = useState('');


    const [nivelations, errorNivelations, nivelationsApiCall] = useFetch({
        service: () => getNivelationExercises(),
        globalLoader: true,
        callNow: true
    });
    const [editNivelationData, errorEditNivelation, editNivelationApiCall] = useFetch({
        service: () => editNivelation(newOrEditNivelationData),
        globalLoader: true,
        callback: () => {
            setShowEditModal(false);
            nivelationsApiCall();
        },
        successAlert: true
    });
    const [createNivelationData, errorcreateNivelation, createNivelationApiCall] = useFetch({
        service: () => createNivelation(newOrEditNivelationData),
        globalLoader: true,
        callback: () => {
            setShowEditModal(false);
            nivelationsApiCall();
        },
        successAlert: true
    });
    const [deleteNivelationData, errorDeleteNivelation, deleteNivelationApiCall] = useFetch({
        service: () => deleteNivelation(selectedDeleteNivelation?._id),
        globalLoader: true,
        callback: () => {
            setShowDeleteModal(false);
            nivelationsApiCall();
        },
        successAlert: true
    });

    const tableData = useTable();

    const onChange = (e) => {
        setNewOrEditNivelationData({
            ...newOrEditNivelationData,
            [e.target.name]: e.target.value
        })
    }

    const onEdit = (data) => {
        setShowEditModal(true)
        setNewOrEditNivelationData(data);
    }

    const onCreate = () => {
        setType('create');
        setNewOrEditNivelationData(defaultValue);
        setShowEditModal(true);
    }

    const onDelete = (nivelation) => {
        setSelectedNivelation(nivelation);
        setShowDeleteModal(true);
    }

    const onSubmitDelete = () => {
        deleteNivelationApiCall(newOrEditNivelationData);
    }

    const onSubmitEditOrCreate = () => {
        if (type === 'edit') {

            editNivelationApiCall(newOrEditNivelationData);
        } else if (type === 'create') {
            createNivelationApiCall(newOrEditNivelationData);
        }
        setNewOrEditNivelationData(defaultValue);
    }

    const onCloseEditModal = () => {
        setShowEditModal(false);
        setNewOrEditNivelationData(defaultValue);
    }
    const onCloseDeleteModal = () => {
        setShowDeleteModal(false);
    }

    return (
        <div className="mt-3">
            <Table
                extraSearch={<Button type={2} text={t('global.create')} onClick={onCreate} />}
                {...tableData}
                onPressSearch={null}
                columns={[
                    { title: 'titleEN', field: 'titleEN' },
                    { title: 'titleES', field: 'titleES' },
                    { title: 'lvl1', field: 'lvl1' },
                    { title: 'lvl2', field: 'lvl2' },
                    { title: 'lvl3', field: 'lvl3' },
                    { title: 'lvl4', field: 'lvl4' },
                    { title: 'lvl5', field: 'lvl5' },
                    { title: 'lvl6', field: 'lvl6' },
                    { title: 'lvl7', field: 'lvl7' },
                    { title: 'lvl8', field: 'lvl8' },
                    { title: 'lvl9', field: 'lvl9' },
                    { title: 'lvl10', field: 'lvl10' },
                    { title: 'lvl11', field: 'lvl11' },
                    { title: 'lvl12', field: 'lvl12' },
                    { title: t('global.edit'), field: 'edit' },
                    { title: t('global.delete'), field: 'delete' },
                ]}
                data={nivelations?.response.map(nivelation => ({
                    ...nivelation,
                    edit: <Button key={randomHexadecimal()} type={1} text={t('global.edit')} onClick={() => onEdit(nivelation)} />,
                    delete: <Button key={randomHexadecimal()} type={2} text={t('global.delete')} onClick={() => onDelete(nivelation)} />
                }))}
            />
            <Modal
                show={showEditModal}
                onClose={onCloseEditModal}
                acceptButton={{
                    action: onSubmitEditOrCreate,
                    disabled: !(newOrEditNivelationData.titleEN && newOrEditNivelationData.titleES &&
                        newOrEditNivelationData.lvl1 &&
                        newOrEditNivelationData.lvl2 &&
                        newOrEditNivelationData.lvl3 &&
                        newOrEditNivelationData.lvl4 &&
                        newOrEditNivelationData.lvl5 &&
                        newOrEditNivelationData.lvl6 &&
                        newOrEditNivelationData.lvl7 &&
                        newOrEditNivelationData.lvl8 &&
                        newOrEditNivelationData.lvl9 &&
                        newOrEditNivelationData.lvl10 &&
                        newOrEditNivelationData.lvl11 &&
                        newOrEditNivelationData.lvl12
                    )
                }}
            >
                <form className="col-12">
                    <div className="col-11">
                        <Input label='EN' name='titleEN' onChange={onChange} value={newOrEditNivelationData.titleEN} />
                        <Input label='ES' name='titleES' onChange={onChange} value={newOrEditNivelationData.titleES} />
                    </div>
                    <div className="col-11">
                        <Input label='lvl1' type='number' onChange={onChange} name='lvl1' value={newOrEditNivelationData.lvl1} />
                        <Input label='lvl2' type='number' onChange={onChange} name='lvl2' value={newOrEditNivelationData.lvl2} />
                        <Input label='lvl3' type='number' onChange={onChange} name='lvl3' value={newOrEditNivelationData.lvl3} />
                        <Input label='lvl4' type='number' onChange={onChange} name='lvl4' value={newOrEditNivelationData.lvl4} />
                        <Input label='lvl5' type='number' onChange={onChange} name='lvl5' value={newOrEditNivelationData.lvl5} />
                        <Input label='lvl6' type='number' onChange={onChange} name='lvl6' value={newOrEditNivelationData.lvl6} />
                        <Input label='lvl7' type='number' onChange={onChange} name='lvl7' value={newOrEditNivelationData.lvl7} />
                        <Input label='lvl8' type='number' onChange={onChange} name='lvl8' value={newOrEditNivelationData.lvl8} />
                        <Input label='lvl9' type='number' onChange={onChange} name='lvl9' value={newOrEditNivelationData.lvl9} />
                        <Input label='lvl10' type='number' onChange={onChange} name='lvl10' value={newOrEditNivelationData.lvl10} />
                        <Input label='lvl11' type='number' onChange={onChange} name='lvl11' value={newOrEditNivelationData.lvl11} />
                        <Input label='lvl12' type='number' onChange={onChange} name='lvl12' value={newOrEditNivelationData.lvl12} />
                    </div>
                </form>

            </Modal>
            <Modal
                show={showDeleteModal}
                onClose={onCloseDeleteModal}
                acceptButton={{
                    action: onSubmitDelete
                }}
            >
                <Text text={t('admin.nivelation.deleteNivelation', { title: selectedDeleteNivelation?.[`title${langUpperCased()}`] })} />

            </Modal>
        </div>
    )
}

export default AdminNivelation
