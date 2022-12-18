import { useNavigate } from 'react-router-dom';
import './TopBar.scss';

import useStyles from './useStyles';
import { IconBack } from '../../assets/Icons/IconBack';
import Text from '../Text/Text';

const TopBar = ({ text, color = 1, bg = 'none', back = false, shadow, banner, bannerTexts }) => {
	const navigate = useNavigate();

	const handleClick = () => navigate(-1);

	const styles = useStyles({ bg, color, back, shadow, banner });

	return (
		<div className={styles.container}>
			<nav>
				<div className={styles.body}>
					{back && (
						<div
							className={styles.backArrowBtn}
							onClick={handleClick}
						>
							<div>
								<IconBack color={styles.icon} />
							</div>
						</div>
					)}
					<div className={back ? styles.textContainerWithArrow : styles.textContainerNotArrow}>
						<Text text={text} color={color} className='p-1' size='2' />
					</div>
				</div>
			</nav>
			{bannerTexts && <div className='pb-5'>

				{bannerTexts?.map(bt => bt)}
			</div>}
		</div>
	);
};

export default TopBar;
