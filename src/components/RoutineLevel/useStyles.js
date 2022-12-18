const useStyles = ({active, done}) => ({
    mainContainer: `routine-level col-12 px-5 routine-level-background--${active ? 'active py-2' : done ? 'done py-2' : 'none'}`,
    header: `d-flex justify-content-between align-items-center`,
    ellipseActive: 'routine-level-ellipse--active',
    ellipseActiveInner: 'routine-level-ellipse--active-inner',
    trainings: 'routine-level-trainings'
});

export default useStyles;