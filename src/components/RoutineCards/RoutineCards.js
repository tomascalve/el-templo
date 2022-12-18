import useStyles from "./useStyles";
import './RoutineCards.scss';
import RoutineCard from "./RoutineCard/RoutineCard";
import { useTranslation } from "react-i18next";
import { randomHexadecimal } from "../../utils/mathUtils";

const ROUTINE_BLOCKS = [1, 2, 3];

const RoutineCards = ({ currentBlock }) => {
    const { t } = useTranslation();
    const styles = useStyles();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.cardContainer}>
                {ROUTINE_BLOCKS.map(routine => <RoutineCard
                    key={randomHexadecimal()}
                    text={t('global.block', { number: routine })}
                    done={currentBlock > routine}
                    active={currentBlock === routine}
                />)}
            </div>
        </div>

    )
}

export default RoutineCards;