import './Help.scss';
import { useTranslation } from 'react-i18next';
import Text from '../../components/Text/Text';
import useStyles from './useStyles';
const HelpAccordionBlue = ({ accordionType = 'blue', color = 'color' }) => {
	const { t } = useTranslation();
	const styles = useStyles();
	return (
		<div className={styles.containerHAB} id='accordionFlushExample'>

			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingOne'>
					<button
						className={`accordion-button rounded-top accordion-button--${accordionType} `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseOne'
						aria-expanded='false'
						aria-controls='flush-collapseOne'
					>
						{t('help.main.accordionTextBlue1')}
					</button>
				</h2>
				<div
					id='flush-collapseOne'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingOne'
					data-bs-parent='#accordionFlushExample'
				>
					<div
						className={`accordion-body accordion-body--${color} col-12`}
					>
						<div className={styles.textHAB1}>
							<Text
								text={t('help.main.auxText3.item1')}
								color={1}
								size={2}
								justify="start"
							/>
							<Text
								text={t('help.main.auxText3.item2')}
								color={1}
								size={2}
								justify="start"
							/>
							<Text
								text={t('help.main.auxText3.item3')}
								color={1}
								size={2}
								justify="start"
							/>
							<Text
								text={t('help.main.auxText3.item4')}
								color={1}
								size={2}
								justify="start"
							/>
							<Text
								text={t('help.main.auxText3.item5')}
								color={1}
								size={2}
								justify="start"
							/>
							<Text
								text={t('help.main.auxText3.item6')}
								color={1}
								size={2}
								justify="start"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingTwo'>
					<button
						className={`accordion-button border-1 accordion-button--${accordionType}`}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseTwo'
						aria-expanded='false'
						aria-controls='flush-collapseTwo'
					>
						{t('help.main.accordionTextBlue2')}
					</button>
				</h2>
				<div
					id='flush-collapseTwo'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingTwo'
					data-bs-parent='#accordionFlushExample'
				>
					<div className={`accordion-body accordion-body--${color} p-3`}>
						<Text
							text={t('help.main.textBlue2Items')}
							color={1}
							size={2}
							justify="start"
						/>
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingThree'>
					<button
						className={`accordion-button  border-1 accordion-button--${accordionType}  `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseThree'
						aria-expanded='false'
						aria-controls='flush-collapseThree'
					>
						{t('help.main.accordionTextBlue3')}
					</button>
				</h2>
				<div
					id='flush-collapseThree'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingThree'
					data-bs-parent='#accordionFlushExample'
				>
					<div className={`accordion-body accordion-body--${color}  p-3`}>
						<Text
							text={t('help.main.textBlue3Items')}
							color={1}
							size={2}
							justify="start"
						/>
					</div>
				</div>
			</div>
			<div className='accordion-item'>
				<h2 className='accordion-header' id='flush-headingFour'>
					<button
						className={`accordion-button rounded-bottom accordion-button--${accordionType} `}
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#flush-collapseFour'
						aria-expanded='false'
						aria-controls='flush-collapseFour'
					>
						{t('help.main.accordionTextBlue4')}
					</button>
				</h2>
				<div
					id='flush-collapseFour'
					className='accordion-collapse collapse'
					aria-labelledby='flush-headingFour'
					data-bs-parent='#accordionFlushExample'
				>
					<div className={`accordion-body accordion-body--${color}  p-3`}>
					<Text
							text={t('help.main.textBlue4Items')}
							color={1}
							size={2}
							justify="start"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpAccordionBlue;
