import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { getUserInfoAction } from '../../redux/user';
import { getUserInfo } from '../../services/user';

const PrivatedLayout = () => {
	const dispatch = useDispatch();
	const [data] = useFetch({
		service: () => getUserInfo(),
		globalLoader: true,
		callNow: true,
		callback: () => {
			dispatch(getUserInfoAction(data?.user));
		}
	})

	return (
		<div className='col-12'>
			<Outlet />
		</div>
	);
};

export default PrivatedLayout;
