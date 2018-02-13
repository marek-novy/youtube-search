import { routerReducer as routing } from 'react-router-redux';

import headerState from './containers/appHeader/AppHeaderReducer';
import { appState } from './containers/homepage/ReducerHomepage';
import sidebarState from './containers/sidebar/SidebarReducer';

// import { questionnaireReducer } from './containers/quiestionare/ReducerQuestionnaire';
export const rootReducer = { 
    routing,
    appState,
    headerState,
    sidebarState
}; 
