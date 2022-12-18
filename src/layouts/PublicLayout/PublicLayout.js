import { Outlet } from 'react-router';

const PublicLayout = () => {
	return (
		<div className='col-12'>
			<Outlet />
		</div>
	);
};

export default PublicLayout;
