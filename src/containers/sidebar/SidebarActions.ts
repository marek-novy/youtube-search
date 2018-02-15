import { IAction } from 'types/ActionInterface';

export enum SidebarActions {
    SIDEBAR_SEARCH_LOADED = 'SIDEBAR_SEARCH_LOADED',
}

// export interface SidebarLoadedPayload {

// }

export const HeaderSubmitSearch = (payload): IAction<SidebarActions, any> => {
    return {
        type: SidebarActions.SIDEBAR_SEARCH_LOADED,
        payload,
    };
};
