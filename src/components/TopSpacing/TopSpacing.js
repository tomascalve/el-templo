const TopSpacing = ({ scroll }) => {
    return (
        <div className={`${scroll ? 'my-4' : 'my-5 py-5'}`}>
            <div className="py-4"></div>
        </div>
    )
}

export default TopSpacing;
