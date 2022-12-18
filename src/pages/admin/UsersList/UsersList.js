import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { getUsers } from '../../../services/admin';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Table from '../../../components/Table/Table';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';
import { cutDate, compareWithCurrDate } from '../../../utils/date';
import { useTranslation } from 'react-i18next';
import Point from '../../../assets/Icons/Point';
import useTable from '../../../hooks/useTable';
import { useDispatch } from 'react-redux';
import { replaceRouteName } from '../../../redux/route';
import { randomHexadecimal } from '../../../utils/mathUtils';

const UsersList = () => {

	const dispatch = useDispatch();
	
	const { t } = useTranslation();
	
	const navigate = useNavigate();
	
	const [data, error, apiCall] = useFetch({
		service: () => getUsers({ search, offset }),
		globalLoader: true,
	});
	
	const handleClick = (id) => {
		navigate(`/${PATHS.ADMIN_USER_INFO}?id=${id}`);
	};
	
	
	const { search, setSearch, offset, onSetPage, onPressSearch } = useTable({apiCall});

	useEffect(() => {
		dispatch(replaceRouteName(t('admin.usersList.index')));
	}, [])

	return (
		<MainContainer scroll>
			<div className='my-3'>
				<Table
				apiCall={apiCall}
					paginator
					showSearch
					search={search}
					setSearch={setSearch}
					onPressSearch={onPressSearch}
					offset={offset}
					total={data?.total}
					onSetPage={onSetPage}
					columns={[
						{ title: t('admin.userTable.enabled'), field: 'enabled' },
						{ title: t('admin.userTable.email'), field: 'email' },
						{ title: t('admin.userTable.name'), field: 'name' },
						{ title: t('admin.userTable.sex'), field: 'sex' },
						{ title: t('admin.userTable.country'), field: 'country' },
						{ title: t('admin.userTable.level'), field: 'level' },
						{ title: t('admin.userTable.enabledDate'), field: 'startEnabledDate' },
						{ title: t('admin.userTable.disabledDate'), field: 'endEnabledDate' },
						{ title: t('admin.userTable.options'), field: 'options' },
					]}
					data={data?.users?.map(u => ({
						...u,
						startEnabledDate: cutDate(u.startEnabledDate),
						endEnabledDate: cutDate(u.endEnabledDate),
						name: `${u.firstName} ${u.lastName}`,
						enabled: <Point key={randomHexadecimal()} active={u.endEnabledDate && !compareWithCurrDate(u.endEnabledDate)}/>,
						options: <Button
						key={randomHexadecimal()}
							text='Ver'
							size={3}
							type={3}
							onClick={() =>
								handleClick(u._id)
							}
						/>
					}))}
				/>
			</div>
		</MainContainer>
	);
};

export default UsersList;
