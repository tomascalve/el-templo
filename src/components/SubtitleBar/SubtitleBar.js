import Text from "../Text/Text"
import useStyles from "./useStyles"
import './SubtitleBar.scss';

const SubtitleBar = ({ text }) => {

    const styles = useStyles();

    return (
        <div className={styles.mainContainer}>
            <Text color={6} text={text}/>
        </div>
    )
}

export default SubtitleBar
