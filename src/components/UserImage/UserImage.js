import IconEditAvatar from '../../assets/Icons/IconEditAvatar';
import './UserImage.scss';
import useStyles from './useStyles';

const UserImage = ({ edit, onClick, img }) => {
	const styles = useStyles()
	return (
		<div className={styles.userImage} onClick={onClick}>
			{img ? (
				<div
					className='user__profile--image'
					style={{
						backgroundImage: `url('${img}')`,
						height: '80px',
						width: '80px',
						backgroundSize: '100%'
					}}>
				</div>
			) : (
				<div
					className='user__profile--image'
					style={{
						height: '88px',
						width: '88px',
						backgroundSize: '100%'
					}}>
					{edit && <IconEditAvatar />}
				</div>
			)}
		</div>
	);
};

export default UserImage;
