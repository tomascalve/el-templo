import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import { getUserById, enableOrDisableUser, changeUserLevel } from '../../../../services/admin';
import Text from '../../../../components/Text/Text';
import { useTranslation } from 'react-i18next';
import Point from '../../../../assets/Icons/Point';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { compareWithCurrDate, cutDate } from '../../../../utils/date';

export const AdminUserInfo = () => {

	const { t } = useTranslation();

	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const [changeLevel, setChangeLevel] = useState(false);
	const [newLevel, setNewLevel] = useState(0);

	const id = useLocation()?.search?.split('id=')?.[1];
	if (!id) {
		navigate(-1);
	}

	const [data, error, apiCall] = useFetch({
		service: () => getUserById(id),
		globalLoader: true,
		callback: () => { setUser(data?.user); setChangeLevel(false); }
	})
	const [activateDate, activateError, activateApiCall] = useFetch({
		service: () => enableOrDisableUser(id, user.endEnabledDate && !compareWithCurrDate(user.endEnabledDate)),
		globalLoader: true,
		callback: () => apiCall(),
		successAlert: true
	})
	const [changeLevelData, changeLevelError, changeLevelApiCall] = useFetch({
		service: () => changeUserLevel(id, newLevel),
		globalLoader: true,
		callback: () => apiCall(),
		successAlert: true
	})

	const onChangeLevelInput = (e) => {
		const { value } = e.target;
		if (value >= 0 && value <= 12) {
			setNewLevel(value);
		}
	}

	useEffect(() => {
		if (id) {
			apiCall();
		}
	}, [id])

	return (
		<div className="card col-10 m-auto mt-3">
			<div className="card-body">
				<div className='d-flex flex-column align-items-start col-12'>
					<div className='col-12'>
						<div className='d-flex flex-column col-9 align-items-center'>
							<div className='d-flex col-12 align-items-center'>
								<Text bold text={`${t('admin.userTable.level')} `} />
								{changeLevel ? <Input value={newLevel} onChange={onChangeLevelInput} type='number' /> : <Text bold text={user.level} />}
								{!changeLevel && <div className='col-6'>

									<Button onClick={() => { setChangeLevel(true); setNewLevel(user.level); }} text={t('global.edit')} size={2} type={3} />
								</div>}
							</div>
							{changeLevel && <div className='d-flex mb-2'>

								<Button text={t('global.confirm')} size={2} type={1} onClick={changeLevelApiCall} />
								<Button text={t('global.close')} type={3} onClick={() => setChangeLevel(false)} />
							</div>}
							<div className='col-3'>


							</div>
						</div>
					</div>
					<div className='d-flex align-items-center col-12'>
						<Text bold text={`${t('admin.userTable.enabled')}:`} />
						<Point active={user.endEnabledDate && !compareWithCurrDate(user.endEnabledDate)} />
						<Button onClick={activateApiCall} text={t(`global.${!!user.endEnabledDate && !compareWithCurrDate(user.endEnabledDate) ? 'disable' : 'enable'}`)} size={1} type={3} />
					</div>
					<Text bold text={`${t('admin.userTable.email')}: ${user.email}`} />
					<Text bold text={`${t('admin.userTable.name')}: ${user.firstName} ${user.lastName}`} />
					<Text bold text={`${t('admin.userTable.sex')}: ${user.sex}`} />
					<Text bold text={`${t('admin.userTable.country')}: ${user.country}`} />
					<Text bold text={`${t('admin.userTable.enabledDate')}: ${cutDate(user.startEnabledDate)}`} />
					<Text bold text={`${t('admin.userTable.disabledDate')}: ${cutDate(user.endEnabledDate)}`} />
				</div>

			</div>
		</div>
	);
};
