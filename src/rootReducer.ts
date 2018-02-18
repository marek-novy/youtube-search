import { routerReducer as routing } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import headerState from './containers/appHeader/AppHeaderReducer';
import homepageState from './containers/homepage/HomepageReducer';
import sidebarState from './containers/sidebar/SidebarReducer';

// interface AppState {
//     homepageState: HomepageState;
//     headerState: HeaderState;
//     sidebarState: SidebarState;
// }

// const initialState = {
//     homepageState: HomepageInitialState,
//     headerState: HeaderInitialState,
//     sidebarState: SidebarInitialState,
// };

const persistConfig = {
    key: 'homepageState',
    storage,
    whitelist: ['loggedIn', 'googleData'],
};

export const rootReducer = {
    routing,
    homepageState: persistReducer(persistConfig, homepageState),
    headerState,
    sidebarState,
};
