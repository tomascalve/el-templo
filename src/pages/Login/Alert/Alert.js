import { useTranslation } from 'react-i18next'
import ImgNotActivatedAccount from '../../../assets/images/ImgNotActivatedAccount'
import Modal from '../../../components/Modal/Modal'
import Text from '../../../components/Text/Text'
import useStyles from './useStyles'

const Alert = ({ show, onClose }) => {

    const { t } = useTranslation();

    const styles = useStyles();

    return (
        <Modal show={show} onClose={onClose} closeButton>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <div className={styles.titleContainer}>
                        <Text justify='start' size={4} bold text={t('auth.accountNotEnabled.title')} />
                        <Text justify='start' size={3} bold text={t('auth.accountNotEnabled.subtitle')} />
                    </div>
                    <div className={styles.imgContainer}>
                        <ImgNotActivatedAccount />
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <Text justify='start' size={2} text={t('auth.accountNotEnabled.description1')}/>
                    <Text justify='start' size={2} text={t('auth.accountNotEnabled.description2')}/>
                </div>
            </div>
        </Modal>
    )
}

export default Alert
