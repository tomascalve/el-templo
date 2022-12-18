import { useTranslation } from 'react-i18next';
import './Toast.scss';
import useStyles from "./useStyles";

const Toast = ({ message, error, success }) => {

  const { t } = useTranslation();

  const styles = useStyles({ error, success });

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h6 className={styles.text}>{t(`${error ? 'errors.' + message : success? 'global.success' : ''}`)}</h6>
      </div>
    </div>
  );
};

export default Toast;
