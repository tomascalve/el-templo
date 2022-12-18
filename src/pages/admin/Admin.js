import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AdminBar from '../../components/AdminBar/AdminBar';
import MainContainer from '../../components/MainContainer/MainContainer';

const Admin = () => {

	const { routeName } = useSelector(state => state.route);

	return (
		<MainContainer col='12' navbar scroll back text={routeName.map(r => `${r} `)}>
			<div>
				<AdminBar />
				<Outlet />
			</div>
		</MainContainer>
	);
};

export default Admin;
