import React from 'react';
import { isEmpty } from '../../utils/objectUtils';
import Navbar from '../Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import './MainContainer.scss';
import useStyles from './useStyles';

const MainContainer = ({ children, scroll, backgroundImg, col = '11', navbar, alignCenter, calc, ...topbarOptions }) => {

	const topbar = !isEmpty({ ...topbarOptions });

	const styles = useStyles({ scroll, backgroundImg, col, banner: topbarOptions?.banner, navbar, alignCenter });

	return (
		<div className={styles.container} >
			<div className={styles.mainContainer} >
				{topbar && <TopBar {...topbarOptions} />}
				<div className={styles.bodyContainer} style={calc && { height: 'calc(100vh - 53px)' }}>
					{children}
				</div>
			</div>
			{navbar && <Navbar />}
		</div>
	);
};

export default MainContainer;
