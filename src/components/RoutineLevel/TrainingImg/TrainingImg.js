import Text from "../../Text/Text"
import useStyles from './useStyles';
import './TrainingImg.scss';

const TrainingImg = ({ text, active, done, onClick, img = '' }) => {

    const styles = useStyles({ active, done });

    const handleClick = () => {
        if(active){
            onClick();
        }
    }

    return (
        <div className={styles.mainContainer} onClick={handleClick}>
            <div className={styles.textContainer}>
                <Text color={active ? 6 : done ? 3 : 0} text={text} />
            </div>
            <div className={styles.imgContainer}>
                <img alt='routine' className={styles.img} src={img} width='100' height='100' />
            </div>
        </div>
    )
}

export default TrainingImg
