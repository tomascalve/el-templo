import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'
import InputSelect from '../../../../components/InputSelect/InputSelect'
import MainContainer from '../../../../components/MainContainer/MainContainer'
import Tag from '../../../../components/Tag/Tag'
import Text from '../../../../components/Text/Text'
import TextArea from '../../../../components/TextArea/TextArea'
import { PATHS } from '../../../../constants/paths'
import useFetch from '../../../../hooks/useFetch'
import { getExerciseById, getTagsList, postNewExercise, putEditExercise } from '../../../../services/admin'
import { langUpperCased } from '../../../../utils/localStorage'

const AdminCreateEditExercise = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [newExerciseData, setNewExerciseData] = useState({
        titleES: '',
        titleEN: '',
        descriptionES: '',
        descriptionEN: '',
        tags: [],
        video: ''
    });
    const [tagsList, setTagsList] = useState();
    const [submitIsDisabled, setSubmitIsDisabled] = useState(true);
    const [exerciseIdToEdit, setExerciseIdToEdit] = useState(null);
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        const id = location?.state?.id
        if (id === undefined) {
            setIsEditing(false)
        } else {
            setIsEditing(true)
            setExerciseIdToEdit(id)
        }
    }, [])

    useEffect(() => {
        if (isEditing) {
            apiCallExerciseToEdit()
        }
    }, [isEditing])

    const [tagsListFetch] = useFetch({
        service: () => getTagsList({ offset: 0, search: '', limit: 10000 }),
        callNow: true,
        globalLoader: true,
        callback: () => {
            let auxArr = tagsListFetch.tags
            auxArr.unshift({
                _id: 'default',
                titleEN: "Select Tags",
                titleES: "Seleccione Tags"
            })
            setTagsList(auxArr)
        },
    });

    const [exerciseToEditResponse, exerciseToEditError, apiCallExerciseToEdit] = useFetch({
        service: () => getExerciseById({ id: exerciseIdToEdit }),
        globalLoader: true,
        callback: () => {
            setNewExerciseData({
                titleES: exerciseToEditResponse?.exercise?.titleES,
                titleEN: exerciseToEditResponse?.exercise?.titleEN,
                descriptionES: exerciseToEditResponse?.exercise?.descriptionES,
                descriptionEN: exerciseToEditResponse?.exercise?.descriptionEN,
                tags: exerciseToEditResponse?.exercise?.tags.map(tag => tag._id),
                video: exerciseToEditResponse?.exercise?.video
            })
        },
    });

    const [newExerciseResponse, newExerciseError, apiCallCreateNewExercise] = useFetch({
        service: () => postNewExercise({...newExerciseData, video: newExerciseData?.video || ''}),
        globalLoader: true,
        callback: () => { navigate(`/${PATHS.ADMIN_EXERCISES}`) },
    });

    const [editExerciseResponse, editExerciseError, apiCallEditExercise] = useFetch({
        service: () => putEditExercise({
            id: exerciseIdToEdit,
            body: {...newExerciseData, video: newExerciseData?.video || ''}
        }),
        globalLoader: true,
        callback: () => { navigate(`/${PATHS.ADMIN_EXERCISES}`) },
        successAlert: true,
    });

    const handleOnChangeInputs = (e) => {
        setNewExerciseData({
            ...newExerciseData,
            [e.target.name]: e.target.value
        })
    }

    const addTag = (e) => {
        const tagId = e.target.value
        if (tagId !== 'default') { // Prevent Default
            if (!newExerciseData?.tags.some((tag) => tag === tagId)) { // Prevent repetitive Tags
                setNewExerciseData({
                    ...newExerciseData,
                    tags: [...newExerciseData.tags, tagId]
                })
            }
        }
    }

    const deleteTag = (tag) => {
        const auxArr = [...newExerciseData?.tags]
        for (let i = 0; i < auxArr.length; i++) {
            if (auxArr[i] === tag) {
                auxArr.splice(auxArr.indexOf(tag), 1)
            }
        }
        setNewExerciseData({
            ...newExerciseData,
            tags: auxArr
        })
    }

    const onSubmit = () => {
        isEditing ?
            apiCallEditExercise()
            :
            apiCallCreateNewExercise()
    }

    useEffect(() => {
        if (
            newExerciseData?.titleES === '' ||
            newExerciseData?.titleEN === '' ||
            newExerciseData?.descriptionES === '' ||
            newExerciseData?.descriptionEN === '' ||
            newExerciseData?.tags?.length === 0
        ) {
            setSubmitIsDisabled(true)
        } else {
            setSubmitIsDisabled(false)
        }
    }, [newExerciseData])

    return (
        <MainContainer
            col='12'
            scroll
        >
            <div className='col-12 d-flex flex-column justify-content-start align-items-center h-100'>
                <div className='col-10 d-flex flex-column align-items-center'>
                    <Input
                        label={t(`admin.exercises.video`)}
                        placeholder='<iframe>...'
                        name='video'
                        value={newExerciseData.video}
                        onChange={handleOnChangeInputs}
                    />
                    <Input
                        label={t(`admin.exercises.spanishName`)}
                        placeholder={t(`admin.exercises.spanishName`)}
                        name='titleES'
                        value={newExerciseData.titleES}
                        onChange={handleOnChangeInputs}
                    />
                    <TextArea
                        label={t(`admin.exercises.spanishDescription`)}
                        placeholder={t(`admin.exercises.spanishDescription`)}
                        name='descriptionES'
                        value={newExerciseData.descriptionES}

                        onChange={handleOnChangeInputs}
                    />
                    <Input
                        label={t(`admin.exercises.englishName`)}
                        placeholder={t(`admin.exercises.englishName`)}
                        onChange={handleOnChangeInputs}
                        name='titleEN'
                        value={newExerciseData.titleEN}

                    />
                    <TextArea
                        label={t(`admin.exercises.englishDescription`)}
                        placeholder={t(`admin.exercises.englishDescription`)}
                        name='descriptionEN'
                        value={newExerciseData.descriptionEN}

                        onChange={handleOnChangeInputs}
                    />

                    <div className='w-100 mt-2'>
                        <InputSelect
                            readOnly
                            label={t(`admin.exercises.tags`)}
                            name='tags'
                            onChange={(e) => addTag(e)}
                            options={tagsList?.map((tag) => {
                                return {
                                    value: tag._id,
                                    name: `${tag[`title${langUpperCased()}`]}`,
                                };
                            })}
                            value={true}
                        />
                        {newExerciseData?.tags <= 0 &&
                            <div className='col-12 d-flex justify-content-start'>
                                <Text
                                    text={t(`admin.exercises.minOneTag`)}
                                    size={1}
                                    color={1}
                                />
                            </div>
                        }
                    </div>

                    <div className='col-12 d-flex align-items-center flex-wrap mt-2 pb-4'>
                        {newExerciseData?.tags?.map((tag, i) => {
                            const tagToShow = tagsList?.find(e => e?._id === tag)
                            return (
                                <Tag
                                    key={i}
                                    text={tagToShow?.[`title${langUpperCased()}`]}
                                    onClick={() => { deleteTag(tag) }}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className='col-10 my-3'>
                    <Button
                        text={
                            isEditing ?
                                t(`admin.exercises.saveChanges`)
                                :
                                t('admin.exercises.createExercise')
                        } onClick={onSubmit}
                        disabled={submitIsDisabled}
                    />
                </div>
            </div>
        </MainContainer >
    )
}

export default AdminCreateEditExercise