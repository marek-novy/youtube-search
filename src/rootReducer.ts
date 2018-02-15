import { routerReducer as routing } from 'react-router-redux';

import headerState from './containers/appHeader/AppHeaderReducer';
import  homepageState  from './containers/homepage/HomepageReducer';
import sidebarState from './containers/sidebar/SidebarReducer';

// import { questionnaireReducer } from './containers/quiestionare/ReducerQuestionnaire';
export const rootReducer = { 
    routing,
    homepageState,
    headerState,
    sidebarState
}; 
