import { useDispatch } from "react-redux";
import DivBottom from "../../components/DivBottom/DivBottom";
import DivTop from "../../components/DivTop/DivTop";
import MainContainer from "../../components/MainContainer/MainContainer"
import { getDashboard, getUserInfo } from "../../services/user"
import Text from "../../components/Text/Text";
import Tag from "../../components/Tag/Tag";
import useFetch from "../../hooks/useFetch"
import { langUpperCased } from "../../utils/localStorage";
import { getUserInfoAction } from "../../redux/user";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import './Congratulations.scss';
import XPBar from "../../components/ProfileImgAndXP/XPBar";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { randomHexadecimal } from "../../utils/mathUtils";

const Congratulations = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const lang = langUpperCased();
    const navigate = useNavigate();

    const [infoData] = useFetch({
        service: () => getUserInfo(),
        callNow: true,
        globalLoader: true,
        callback: () => dispatch(getUserInfoAction(infoData?.user))
    })

    const [data] = useFetch({
        service: () => getDashboard(),
        callNow: true,
        globalLoader: true
    });

    return (
        <MainContainer
            col={12}
            calc
            scroll
        >
            <DivTop className='mt-5'>
                <Text text={t('congratulations.title')} font={2} size={5} className='my-3' />
                <div className="col-12 d-flex justify-content-center m-auto">
                    <XPBar />
                </div>
                <div className='congratulations-container flex-column col-12 d-flex justify-content-center align-items-center my-5'>

                    <Text text={t('congratulations.cardText1')} color={6} bold size={4} />
                    <Text text={t('congratulations.cardText2')} color={6} bold size={4} />
                </div>
                <Text bold text={t('congratulations.worksToday')} className='mb-4' />
                <div className="d-flex justify-content-evenly flex-wrap">
                    {data?.muscles?.map(tag => <Tag key={randomHexadecimal()} type={2} color={1} text={tag[`title${lang}`]} />)}
                </div>
            </DivTop>
            <DivBottom className='col-12'>
                <Button text={t('global.next')} onClick={() => navigate(`/${PATHS.FEEDBACK}`)} size={2} />
            </DivBottom>

        </MainContainer>
    )
}

export default Congratulations