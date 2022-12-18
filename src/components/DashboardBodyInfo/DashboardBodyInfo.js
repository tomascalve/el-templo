import { BrownCircle } from "./BrownCircle"
import ImgDashboardBodyInfo from '../../assets/images/ImgDashboardBodyInfo'
import useStyles from "./useStyles"
import './DashboardBodyInfo.scss'
import Text from "../Text/Text"
import { useTranslation } from "react-i18next"

const DashboardBodyInfo = ({ upper = 0, middle = 0, bottom = 0 }) => {
    const { t } = useTranslation()
    const style = useStyles()

    return (
        <div className={style.mainContainer}>
            <div>
                <div className={style.textsPosition}>
                    <div className={style.textsFlex}>
                        <Text text={t('dashboard.main.upperBody')} size={1} />
                        <Text text={t('dashboard.main.middleBody')} size={1} />
                        <Text text={t('dashboard.main.lowerBody')} size={1} />
                    </div>
                </div>
                <ImgDashboardBodyInfo />
            </div>

            <div className={style.circlesContainer}>
                <BrownCircle value={upper} />
                <BrownCircle value={middle} />
                <BrownCircle value={bottom} />
            </div>
        </div>
    )
}

export default DashboardBodyInfo