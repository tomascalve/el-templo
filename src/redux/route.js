// ACTION TYPES
const ADD_ROUTE_NAME = 'ADD_ROUTE_NAME';
const REMOVE_ROUTE_NAME = 'REMOVE_ROUTE_NAME';
const RESET_ROUTE_NAME = 'RESET_ROUTE_NAME';
const REPLACE_ROUTE_NAME = 'REPLACE_ROUTE_NAME';
const ADD_PARAMS = 'ADD_PARAMS';

const defaultValue = {
    routeName: [],
    params: {}
};

// REDUCER
// El reducer lo que hace es encontrar la accion que queremos realizar
// Y al encontrarla le devuelve los valores al STORE, quien maneja los estados de redux

export default function RouteReducer(state = defaultValue, { type, payload }) {
    switch (type) {
        case ADD_ROUTE_NAME:
            return { ...state, routeName: payload };
        case REMOVE_ROUTE_NAME:
            return { ...state, routeName: payload };
        case RESET_ROUTE_NAME:
            return { ...state, routeName: [] };
        case REPLACE_ROUTE_NAME:
            return { ...state, routeName: payload };
        case ADD_PARAMS:
            return { ...state, params: {...state.params, ...payload} };
        default:
            return state;
    }
}

export const addRouteName = (data) => async (dispatch, getState) => {
    const newRouteData = [...getState().route.routeName];
    newRouteData.push(data);
    dispatch({
        type: ADD_ROUTE_NAME,
        payload: newRouteData,
    });

};

export const removeRouteName = () => (dispatch, getState) => {
    const newRouteData = [...getState().route.routeName];
    newRouteData.pop();
    dispatch({
        type: REMOVE_ROUTE_NAME,
        payload: newRouteData
    });
};

export const resetRouteName = () => (dispatch) => {
    dispatch({
        type: RESET_ROUTE_NAME,
    });
};

export const replaceRouteName = (data) => (dispatch) => {
    dispatch({
        type: REPLACE_ROUTE_NAME,
        payload: [data]
    });
}

export const addRouteParams = ({ propName, value }) => (dispatch) => {
    dispatch({
        type: ADD_PARAMS,
        payload: { [propName]: value }
    });
}