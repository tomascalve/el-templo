const useStyles = ({ isActive, isEditing }) => {
    return {
        trainingCardContainer: `trainig-card-container ${(isActive && !isEditing) && 'is-active'} col-11 d-flex flex-column`,
        titleContainer: '',
        exercisesContainer: 'd-flex justify-content-around',
        exerciseLeft: 'exercise-box d-flex flex-column align-items-center',
        exerciseRight: 'exercise-box d-flex flex-column align-items-center',
        inputsContainer: 'inputs-container d-flex flex-column justify-content-between',
        inputSelect: 'input-select',
        inputNumberContainer: 'd-flex justify-content-center align-items-center',
        inputNumberText: 'input-number-text',
        inputNumber: 'input-number',
    };
};

export default useStyles;
