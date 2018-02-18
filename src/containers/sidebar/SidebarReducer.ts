import { IAction } from 'types/ActionInterface';

import { SidebarActions } from './SidebarActions';

export interface SidebarState {
    youtubeSnippets: any;
    isLoaded: boolean;
}

export const SidebarInitialState: SidebarState = {
    youtubeSnippets: {},
    isLoaded: false,
};
export const SidebarReducer = (
    state: SidebarState = SidebarInitialState,
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
    return storeState.sidebarState;
};

export const getIsLoaded = (state: SidebarState): boolean => {
    return state.isLoaded;
};

export const getYoutubesnippets = (state: SidebarState): string => {
    return state.youtubeSnippets;
};

export default SidebarReducer;
