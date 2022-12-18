const defaultValue = {
    isError: false,
    message: '',
    code: null,
    loading: false,
    isSuccess: false
};

const NEW_ERROR = 'NEW_ERROR';
const CLEAN_ERROR = 'CLEAN_ERROR';
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const CLEAN_SUCCESS = 'CLEAN_SUCCESS';

export default function ApiReducer(state = defaultValue, { type, payload }) {

    switch (type) {
        case NEW_ERROR: return { ...state, isError: true, message: payload.message, code: payload.code, loading: false };
        case SUCCESS: return { ...state, isError: false, loading: false, message: payload.message, isSuccess: true };
        case LOADING: return { ...state, isError: false, loading: true, isSuccess: false };
        case CLEAN_SUCCESS: return { ...state, ...defaultValue, isSuccess: false, isError: state.isError };
        case CLEAN_ERROR: return { ...state, ...defaultValue, isSuccess: state.isSuccess };
        default: return state;
    }
};

export const setErrorAction = error => dispatch => {
    dispatch({
        type: NEW_ERROR,
        payload: {
            message: error?.message,
            code: error?.code
        }
    })
}

export const cleanErrorAction = error => dispatch => {

    dispatch({
        type: CLEAN_ERROR
    })
}
export const cleanSuccessAction = () => dispatch => {

    dispatch({
        type: CLEAN_SUCCESS
    })
}

export const loadingAction = () => dispatch => {
    dispatch({
        type: LOADING
    })
}

export const successAlertAction = (t) => dispatch => {
    dispatch({
        type: SUCCESS,
        payload: {message: 'success'}
    })
}