import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from './auth';
import ApiReducer from './api';
import UserReducer from './user';
import RouteReducer from './route';
import ExerciseReducer from './exercise';

const rootReducer = combineReducers({
	auth: AuthReducer,
	user: UserReducer,
	api: ApiReducer,
	route: RouteReducer,
	exercise: ExerciseReducer
	//Aca hay que agregar los otros reducers que se requieran
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function genereteStore() {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}
