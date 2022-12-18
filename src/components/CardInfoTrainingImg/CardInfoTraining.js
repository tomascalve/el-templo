import Tag from "../Tag/Tag"
import Text from "../Text/Text"
import useStyles from "./useStyles"
import './CardInfoTraining.scss';
import { randomHexadecimal } from '../../utils/mathUtils';

const CardInfoTraining = ({ text, tags, disabled, img = '', done }) => {

    const styles = useStyles({disabled, done});

    return (
        <div className={styles.mainContainer}>
            <div className={styles.body}>

                <div className={styles.imgContainer}>
                    <img alt='avatar' className={styles.img} src={img} width='120' height='120' />
                </div>

                <div className={styles.infoContainer}>
                    <div>
                        <Text text={text} size={4} bold />
                        <div className={styles.isDisabled}></div>
                    </div>
                    <div className={styles.tagContainer}>
                        {tags?.map(t => <Tag key={randomHexadecimal()} type={2} color={5} bold text={t} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfoTraining
