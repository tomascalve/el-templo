import Text from '../Text/Text';
import './ImportantBar.scss';

const ImportantBar = ({ text }) => {
	return (
		<div className='importantBox col-12'>
			<Text
				text={text}
				size={3}
			/>
		</div>
	);
};

export default ImportantBar;
