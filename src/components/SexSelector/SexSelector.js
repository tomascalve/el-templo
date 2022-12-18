import { useTranslation } from 'react-i18next';
import useStyles from './useStyles';
import ButtonRadio from '../ButtonRadio/ButtonRadio';


const SexSelector = ({ handleChange, checkedF, checkedM, checkedO }) => {
	const { t } = useTranslation();
	const styles = useStyles();

	return (
		<div className={styles.containerButtonsRadio}>
			<div className={styles.ButtonRadio}>
				<ButtonRadio
					type='radio'
					name={'sex'}
					id='btnradio1'
					value='F'
					checked={checkedF}
					onChange={handleChange}
					stylesButtonRadio={1}
					htmlFor='btnradio1'
					label={t('auth.register.sex1')}
				/>
			</div>

			<div className={styles.ButtonRadio}>
				<ButtonRadio
					type='radio'
					name={'sex'}
					id='btnradio2'
					value='M'
					checked={checkedM}
					onChange={handleChange}
					stylesButtonRadio={2}
					label={t('auth.register.sex2')}
					htmlFor='btnradio2'
				/>
			</div>
			<div className={styles.ButtonRadio}>
				<ButtonRadio
					type='radio'
					name={'sex'}
					id='btnradio3'
					value='O'
					checked={checkedO}
					onChange={handleChange}
					stylesButtonRadio={3}
					htmlFor='btnradio3'
					label={t('auth.register.sex3')}
				/>
			</div>
		</div>

	);
};

export default SexSelector;
