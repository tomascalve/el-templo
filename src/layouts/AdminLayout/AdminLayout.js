import {Outlet} from 'react-router';

const AdminLayout = () => {
	return (
		<div className='col-12'>
			<Outlet />
		</div>
	);
};

export default AdminLayout;
