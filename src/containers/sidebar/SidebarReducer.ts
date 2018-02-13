import { IAction } from 'types/ActionInterface';

import { SidebarActions } from './SidebarActions';

interface SidebarState {
    youtubeSnippets: any;
    isLoaded: boolean;
}

const initialState: SidebarState = {
    youtubeSnippets: {},
    isLoaded: false,
};
export const SidebarReducer = (
    state: SidebarState = initialState,
    action: IAction<SidebarActions, any>,
): SidebarState => {
    switch (action.type) {
        case SidebarActions.SIDEBAR_SEARCH_LOADED:
            return { 
                ...state,
                youtubeSnippets: action.payload,
                isLoaded: true,
            };
        default:
            return state;
    }
};

// Selectors
export const getSidebarStore = (storeState): SidebarState => {
    return storeState.headerState;
};

export const getIsLoaded = (state: SidebarState): boolean => {
    return state.isLoaded;
};

export const getYoutubesnippets = (state: SidebarState): string => {
    return state.youtubeSnippets;
};

export default SidebarReducer;
