import { IAction } from 'types/ActionInterface';

export enum SidebarActions {
    SIDEBAR_SEARCH_LOADED = 'SIDEBAR_SEARCH_LOADED',
    SIDEBAR_VIDEO_CLICK = 'SIDEBAR_VIDEO_CLICK',
}

// export interface SidebarLoadedPayload {

// }

export const HeaderSubmitSearch = (payload): IAction<SidebarActions, any> => {
    return {
        type: SidebarActions.SIDEBAR_SEARCH_LOADED,
        payload,
    };
};

export const SidebarVideoClick = (payload: string): IAction<SidebarActions, string> => {
    return {
        type: SidebarActions.SIDEBAR_VIDEO_CLICK,
        payload,
    };
};
