import { routerReducer as routing } from 'react-router-redux';
import { appState } from './containers/homepage/ReducerHomepage';
// import { questionnaireReducer } from './containers/quiestionare/ReducerQuestionnaire';
export const rootReducer = {
    routing,
    appState,
};