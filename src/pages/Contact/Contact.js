import MainContainer from '../../components/MainContainer/MainContainer';
import Text from '../../components/Text/Text';
import ImgBlueSeparator from '../../assets/images/ImgBlueSeparator';
import { ImgDiagonalRectangle } from '../../assets/images/ImgDiagonalRectangle';
import useStyles from './useStyles';
import { useTranslation } from 'react-i18next';

const Contact = () => {

	const styles = useStyles();
	const { t } = useTranslation();

	return (
		<MainContainer back shadow text={t('topBar.contact')} col='12'>
			<div
				className={styles.container}
			>
				<div
					className='d-flex flex-column justify-content-between align-items-center'
					style={{ height: '220px' }}
				>
					<ImgBlueSeparator customStyles={styles.custom1} />

					<Text text='Av. Constitución' size='4' />
					<div style={{ marginTop: '-8px' }}>
						<Text text='6745' size='4' />
					</div>
					<Text text='@eltemplomdp' font={2} size='6' />

					<ImgBlueSeparator customStyles={styles.custom2} />
				</div>

				<div
					className={styles.decorationContainer}
					style={{ marginRight: '-18px' }}
				>
					<ImgDiagonalRectangle />
					<ImgDiagonalRectangle />
					<ImgDiagonalRectangle />
				</div>
			</div>
		</MainContainer>
	);
};

export default Contact;
