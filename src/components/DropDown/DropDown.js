import useStyles from './useStyles';
import './DropDown.scss';
import Text from '../Text/Text';
import IconDropDownArrow from '../../assets/Icons/IconDropDownArrow';
import { useState, useRef } from 'react';

const DropDown = ({
	text = 'Title',
	shadow, // Set a Shadow under the contentBox
	children,
	height = true, // If unSet will be Auto, or Set an specific value in pixels, ex; height='200'
}) => {
	const styles = useStyles({ shadow });

	const [isFolded, setIsFolded] = useState(false);

	const contentParentRef = useRef();

	const toggler = () => setIsFolded(!isFolded);

	return (
		<div className={styles.dropDownMainContainer}>
			<div className={styles.bar} onClick={toggler}>
				<Text text={text} bold color={6} />
				<div className={isFolded ? styles.arrowUp : styles.arrowDown}>
					<IconDropDownArrow />
				</div>
			</div>

			<div
				className={styles.contentParent}
				ref={contentParentRef}
				style={
					isFolded
						? {
								height: `${
									height === true
										? contentParentRef.current.scrollHeight // Auto value of height.
										: height // Custom & specific value of height.
								}px`,
						  }
						: { height: '0px' }
				}
			>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};

export default DropDown;
