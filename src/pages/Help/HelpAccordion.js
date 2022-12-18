import './Help.scss';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useStyles from './useStyles';
import useFetch from '../../hooks/useFetch';
import { help } from '../../services/user';
import { PATHS } from '../../constants/paths';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import HelpAccordionBlue from './HelpAccordionBlue';
import Input from '../../components/Input/Input';


const HelpAccordion = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const styles = useStyles();
	const [message, setMessage] = useState('');
	const [subject, setSubject] = useState('');

	const handleChangeMessage = (e) => {
		setMessage(e.target.value);
	};
	const handleChangeSubject = (e) => {
		setSubject(e.target.value);
	};
	const [data, error, apiCall] = useFetch({
		service: () => help({ message, subject }),
		globalLoader: true,
		callback: () => { setMessage(''); setSubject(''); },
		successAlert: true
	});
	const toContact = () => navigate(`/${PATHS.CONTACT}`);
	// toTerms redirige a Contact hasta que este creada la page Terminos&Condiciones
	const toTerms = () => navigate(`/${PATHS.CONTACT}`);
	return (
		<div>
			<div className='accordion col-12 ' id='accordionExample'>
				<div className='accordion-item  '>
					<h2 className='accordion-header ' id='headingTwo '>
						<button
							className={styles.buttonHA1}
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'
						>
							<Text text={t('help.main.accordionText1')} size={1} />
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse  '
						aria-labelledby='headingTwo'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body row mb-5'>
							<div className={styles.textHA1}>
								<Text
									bold
									color={1}
									size={3}
									text={t('help.main.accordionInside1')}
								/>
							</div>
							<div className='col-12'>
								<div className='col-12 d-flex'>
									<div className={styles.textHA2}>
										<Text
											color={1}
											size={2}
											text={t('help.main.accordionInside2')}
										/>
									</div>
									<div className='col-9'>
										<Input
											value={subject}
											onChange={handleChangeSubject}
											type='text'
											className='my-0'
										/>
									</div>
								</div>
								<div className={styles.textHA3}>
									<div className={styles.textHA3b}>
										<Text
											color={1}
											size={2}
											text={t('help.main.accordionInside3')}
										/>
									</div>
									<div className='col-9'>
										<textarea
											value={message}
											onChange={handleChangeMessage}
											rows='5'
											cols='21'
											className={styles.textarea}
										></textarea>
									</div>
								</div>
							</div>

							<div className={styles.buttonHA2}>
								<Button
									disabled={!(!!message && !!subject)}
									onClick={apiCall}
									text={t('help.main.btnSend')}
									size={1}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='headingThree'>
						<button
							className={styles.buttonHA3}
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
						>
							<Text size={1} text={t('help.main.accordionText2')} />
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						aria-labelledby='headingThree'
						data-bs-parent='#accordionExample'
					>
						<div className='accordion-body'>
							<Text
								bold
								className={styles.textfaqs}
								color={1}
								size={3}
								text={t('help.main.faqs')}
							/>
							<Text
								color={1}
								size={2}
								className={styles.textfq}
								text={t('help.main.fq')}
							/>
							<HelpAccordionBlue />
						</div>
					</div>
				</div>
			</div>
			<div>
				{/* TODO  cambiar button por componente Button*/}


				{/* <Button
					text={t('help.main.btn2')}
					type={4}
					onClick={toTerms}
				/> */}

				<Button
					text={t('help.main.btn3')}
					type={4}
					onClick={toTerms}
				/>
			</div>
		</div >
	);
};

export default HelpAccordion;
