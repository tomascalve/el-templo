import useStyles from './useStyles';
import './GenericTicket.scss';
import Text from '../Text/Text';

const GenericTicket = ({ text1, text2, text3, mode, list, stat, dividedTicket }) => {
	const styles = useStyles({ list, stat, dividedTicket });
	return (
		<div className={` generic-ticket  d-flex justify-content-between align-items-center col-11  `}>

			<div className={styles.mainDiv1}>

				<div className={styles.divText1} >
					<Text text={text1} />
				</div>
				<div className={styles.divText2} >
					<Text text={text2} />
				</div>
			</div>

			<div className={styles.divText3}>
				<Text
					className='end__aligned--text'
					text={text3}
				/>
			</div>
		</div>
	);
};

export default GenericTicket;
