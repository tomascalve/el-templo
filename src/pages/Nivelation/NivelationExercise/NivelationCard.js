import { useTranslation } from 'react-i18next';
import Input from '../../../components/Input/Input';
import Text from '../../../components/Text/Text';
import ImgRingHand from '../../../assets/images/ImgRingHand';

const NivelationCard = ({ title, onChange, value }) => {
    const { t } = useTranslation();
    return (
        <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
            <Text
                text={`${t('user.nivelation.howMany')} ${title} ${t(
                    'user.nivelation.canYouDo'
                )}`}
            />
            <div className='mt-5 d-flex flex-column justify-content-start align-items-start'>
                <ImgRingHand />
                <div className='mt-2'>
                    <Text text={t('admin.nivelation.yoursReps')} size='1' />
                </div>
            </div>
        </div>
    );
};

export default NivelationCard;
