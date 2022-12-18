import './Loading.scss';
import useStyles from './useStyles';

const Loading = () => {

    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loading;
