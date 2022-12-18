export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const eachCardIsCompleted = (eachCard) => {
    const selectIsComplete = (value) => {
        const selectorArr = ['', 'elegir', 'select']
        return selectorArr.some(e => e.toLowerCase() === value?.toLowerCase())
    }

    let isComplete = true

    if (
        // --- Adaptation 1
        selectIsComplete(eachCard?.adaptation1?.exercise1?.exerciseId) ||
        eachCard?.adaptation1?.exercise1?.reps <= 0 ||
        eachCard?.adaptation1?.exercise1?.times <= 0 ||
        selectIsComplete(eachCard?.adaptation1?.exercise2?.exerciseId) ||
        eachCard?.adaptation1?.exercise2?.reps <= 0 ||
        eachCard?.adaptation1?.exercise2?.times <= 0 ||
        // --- Adaptation 2
        selectIsComplete(eachCard?.adaptation2?.exercise1?.exerciseId) ||
        eachCard?.adaptation2?.exercise1?.reps <= 0 ||
        eachCard?.adaptation2?.exercise1?.times <= 0 ||
        selectIsComplete(eachCard?.adaptation2?.exercise2?.exerciseId) ||
        eachCard?.adaptation2?.exercise2?.reps <= 0 ||
        eachCard?.adaptation2?.exercise2?.times <= 0 ||
        // --- Strength
        selectIsComplete(eachCard?.strength?.exercise1?.exerciseId) ||
        eachCard?.strength?.exercise1.reps <= 0 ||
        eachCard?.strength?.exercise1?.times <= 0 ||
        selectIsComplete(eachCard?.strength?.exercise2?.exerciseId) ||
        eachCard?.strength?.exercise2?.reps <= 0 ||
        eachCard?.strength?.exercise2?.times <= 0 ||
        // --- Hypertrophy
        selectIsComplete(eachCard?.hypertrophy?.exercise1?.exerciseId) ||
        eachCard?.hypertrophy?.exercise1?.reps <= 0 ||
        eachCard?.hypertrophy?.exercise1?.times <= 0 ||
        selectIsComplete(eachCard?.hypertrophy?.exercise2?.exerciseId) ||
        eachCard?.hypertrophy?.exercise2?.reps <= 0 ||
        eachCard?.hypertrophy?.exercise2?.times <= 0 ||
        // --- Suplementary
        selectIsComplete(eachCard?.suplementary?.exercise1?.exerciseId) ||
        eachCard?.suplementary?.exercise1?.reps <= 0 ||
        eachCard?.suplementary?.exercise1?.times <= 0 ||
        selectIsComplete(eachCard?.suplementary?.exercise2?.exerciseId) ||
        eachCard?.suplementary?.exercise2?.reps <= 0 ||
        eachCard?.suplementary?.exercise2?.times <= 0
    ) { isComplete = false }

    return isComplete
}