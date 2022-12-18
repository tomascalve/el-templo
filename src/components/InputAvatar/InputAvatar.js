import Modal from '../../components/Modal/Modal'
import avatar1 from '../../assets/images/avatars/1.jpg'
import avatar2 from '../../assets/images/avatars/2.jpg'
import avatar3 from '../../assets/images/avatars/3.jpg'
import IconEditAvatar from '../../assets/Icons/IconEditAvatar';

const AVATAR = [
    <IconEditAvatar />,
    avatar1,
    avatar2,
    avatar3
]

const InputAvatar = ({ showModal, onCloseInputAvatar, onClickInputAvatar, onChangeAvatar, img, isEditing }) => {

    const onSelectAvatar = (avatarNumber) => {
        onChangeAvatar(avatarNumber.toString())
        showModal = false
    }

    return (
        <div>
            <div style={{
                marginRight: '3px', marginTop: '9px',
                border: '3px solid #2e4f77',
                borderRadius: '100%',
                cursor: `${isEditing ? 'pointer' : 'default'}`
            }}>
                <div
                    onClick={onClickInputAvatar}
                    style={{
                        opacity: `${isEditing ? '80%' : '0%'}`,
                        zIndex: '2',
                        position: 'absolute'
                    }}
                >
                    <IconEditAvatar />
                </div>
                <div
                    onClick={onClickInputAvatar}
                    style={{
                        position: 'relative',
                        width: '88px',
                        height: '88px'
                    }}>
                    {img <= 0 ?
                        <IconEditAvatar />
                        :
                        <img
                        alt='editAvatar'
                        src={AVATAR[img]} style={{
                            width: '88px',
                            height: '88px',
                            borderRadius: '100%',
                        }} />
                    }
                </div>
            </div>
            <Modal show={showModal} onClose={onCloseInputAvatar} >
                {AVATAR.map((avatar, index) => {
                    return index != 0 && <img
                        key={index}
                        onClick={() => onSelectAvatar(index)}
                        src={avatar}
                        height='85px'
                        style={{
                            margin: '5px',
                            borderRadius: '50px',
                            boxShadow: '2px 2px 10px rgba(0,0,0,.2)',
                            border: `${img == index ? '3px solid #2e4f77' : '3px solid rgba(0,0,0,0)'}`,
                            cursor: 'pointer',
                        }}
                    />
                })}
            </Modal>
        </div>)
}

export default InputAvatar