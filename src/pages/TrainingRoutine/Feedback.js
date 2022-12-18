import { useTranslation } from "react-i18next"
import Button from "../../components/Button/Button"
import DivBottom from "../../components/DivBottom/DivBottom"
import DivTop from "../../components/DivTop/DivTop"
import MainContainer from "../../components/MainContainer/MainContainer"
import Text from "../../components/Text/Text"
import TextArea from "../../components/TextArea/TextArea"
import { Knob } from 'primereact/knob';
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PATHS } from "../../constants/paths"
import { help } from "../../services/user"
import useFetch from "../../hooks/useFetch"

export const Feedback = () => {

    const { t } = useTranslation();
    const [knobValue, setKnobValue] = useState(50);
    const [knobText, setKnobText] = useState('good');
    const [knobColor, setKnobColor] = useState('green');

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const onChange = (value, text, color) => {
        setKnobValue(value);
        setKnobText(text);
        setKnobColor(color);
    }

    const [data, error, apiCall] = useFetch({
        service: () => help({ message, subject: `Feedback Training: ${knobText}` }),
		globalLoader: true,
		callback: () => { setMessage('') },
        successAlert: true
    })


    return (
        <MainContainer
            calc
            scroll
        >
            <DivTop className='mt-5'>
                <Text text={t('feedback.title')} size={4} bold className='my-3' />


                <Knob className="knob ml-3" value={knobValue} valueColor={knobColor} size={150} min={0} max={100} textColor={knobColor} valueTemplate={t(`feedback.${knobText}`)} readOnly showValue={true} />
                <div className="col-12 d-flex justify-content-center">
                    <Button secondary={knobValue === 10} size={1} type={3} onClick={() => onChange(10, 'easy', 'yellow')} text={t('feedback.easy')} />
                    <Button secondary={knobValue === 50} size={1} type={3} onClick={() => onChange(50, 'good', 'green')} text={t('feedback.good')} />
                    <Button secondary={knobValue === 100} size={1} type={3} onClick={() => onChange(100, 'hard', 'red')} text={t('feedback.hard')} />
                </div>
                {/* <Button label="Increment" onClick={increment} className="mr-2" disabled={disabledIncrementBtn} /> */}
                {/* <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} /> */}
                <div className="col-12 my-3">

                    <Text justify="start" text={t('feedback.messageTitle')} className='mb-1' />
                    <TextArea onChange={(e) => setMessage(e.target.value)} value={message} placeholder={t('feedback.textAreaPlaceholder')} />
                    <div className="d-flex justify-content-end">
                        <Button type={3} onClick={apiCall} size={1} text={t('global.send')} disabled={!(!!message)} />
                    </div>
                </div>
            </DivTop>
            <DivBottom className='col-12 my-5'>
                <Button onClick={() => navigate(`/${PATHS.DASHBOARD}`)} text={t('feedback.returnToDashboard')} size={3} className='mb-5'/>
            </DivBottom>

        </MainContainer>
    )
}
