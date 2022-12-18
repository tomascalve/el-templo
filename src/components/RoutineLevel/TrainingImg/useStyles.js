const useStyles = ({ active, done }) => ({
    mainContainer: `d-flex flex-column justify-content-center align-items-center col-sm-12 col-md-3 m-2 training-img-container training-img-container--${active ? 'active' : done ? 'done' : 'disabled'} p-2`,
    textContainer: 'py-2',
    imgContainer: ``,
    img: 'border-rounded'
});

export default useStyles;