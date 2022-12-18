import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import Text from '../Text/Text';
import './Modal.scss';
import useStyles from './useStyles';

const Modal = ({ header, children, show, onClose, acceptButton, closeButton }) => {
	const { t } = useTranslation();

	const styles = useStyles();

	return (
		<>
			{show && (
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.closeButtonContainer}>

							<Text
								onClick={onClose}
								type={3}
								text='X'
								className={styles.closeButton}
								cursorPointer />
						</div>
						<div className={styles.contentBody}>

							<Text className={styles.header} text={header} size={4} />

							<div className={styles.body}>{children}</div>
						</div>
								<div className={styles.footer}>
									{acceptButton && (
										<Button
											text={acceptButton.text || t('global.confirm')}
											onClick={
												onClose && acceptButton?.action
											}
											disabled={acceptButton.disabled}
											size={1}
										/>
									)}
									{closeButton && (
										<Button
											text={closeButton.text || t('global.close')}
											onClick={onClose}
											type={3}
										/>
									)}
								</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
