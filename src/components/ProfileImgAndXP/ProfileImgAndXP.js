import React from 'react'
import { useSelector } from 'react-redux';
import InputAvatar from '../InputAvatar/InputAvatar'
import useStyles from './useStyles';
import './ProfileImgAndXP.scss';
import XPBar from './XPBar';

const ProfileImgAndXP = () => {

    const { img } = useSelector((store) => store.user);
    const styles = useStyles();

    return (
        <div className={styles.levelContainer}>
            <div className={styles.userImg} >
                <InputAvatar img={img} />
            </div>

            <XPBar />
        </div>
    )
}

export default ProfileImgAndXP
