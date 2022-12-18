const DivBottom = ({ children, className, style, marginBottom = 0, separation = 2 }) => {

    const SEPARATION = {
        1: 0,
        2: 44,
        3: 80
    }

    return (
        <div
            className={
                className +
                ' col-12 d-flex flex-column justify-content-start align-items-center'
            }
            style={{
                ...style,
                margin: '0px',
                padding: '0px',
                marginBottom: `${SEPARATION[separation] + (marginBottom && marginBottom)}px`
            }}>
            {children}
        </div>
    )
}

export default DivBottom