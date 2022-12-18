import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './styles/icons.scss';
import './styles/global.scss';
import Toast from './components/Toast/Toast';

import i18n from './i18n-lang-conf';
import { checkLoggedUserAction } from './redux/auth';
import { cleanErrorAction, cleanSuccessAction } from './redux/api';
import RouterApp from './Router/RouterApp';
import './styles/variables.scss';
import Loading from './components/Loading/Loading';
import AnimationElTemplo from './components/AnimationElTemplo/AnimationElTemplo';

function App() {
	const { isError, message, loading, isSuccess } = useSelector((store) => store.api);
	//Integrates i18n to the whole App.
	i18n.options.interpolation.defaultVariables = {
		companyName: 'El Templo',
	};

	const [showAnimationElTemplo, setShowAnimationElTemplo] = useState(true);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkLoggedUserAction());
	}, []);

	useEffect(() => {
		if (isError) {
			setTimeout(() => {
				dispatch(cleanErrorAction());
			}, 8000);
		}
	}, [isError]);
	useEffect(() => {
		if (isSuccess) {
			setTimeout(() => {
				dispatch(cleanSuccessAction());
			}, 8000);
		}
	}, [isSuccess]);

	useEffect(() => {
		setTimeout(() => {
			setShowAnimationElTemplo(false);
		}, 4000)
	}, [])

	return (
		<div className='App container-fluid' id="App">
			{showAnimationElTemplo && <AnimationElTemplo />}
			{loading && <Loading />}
			{(isError || isSuccess) && <Toast error={isError} success={isSuccess} message={message} />}
			<RouterApp />
		</div>
	);
}

export default App;
