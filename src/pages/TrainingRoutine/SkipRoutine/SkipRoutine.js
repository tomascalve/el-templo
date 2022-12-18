import { useTranslation } from "react-i18next"
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text"

const SkipRoutine = ({ onClick, onClose }) => {

    const { t } = useTranslation();

    return (
        <div className="col-12" style={{backgroundColor: '#CED4DA'}}>
            <div className="col-12 px-3 py-1 d-flex justify-content-end">

                <div className="">
                    <Text size={1} cursorPointer onClick={onClose} justify='end' color={5} bold text='x' />
                </div>
            </div>
            <div className="col-11 m-auto">
                <Text size={1} text={t('user.training.skipText')} />
                <div className="d-flex justify-content-end col-12">
                    <Button onClick={onClick} text={t('user.training.skipBtn')} className="d-flex justify-content-end" type={3} />
                </div>
            </div>
        </div>
    )
}

export default SkipRoutine
