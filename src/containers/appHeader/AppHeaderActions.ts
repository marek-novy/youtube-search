import { IAction } from '../../types/ActionInterface';

export enum HeaderActions {
    HEADER_SUBMIT_SEARCH = 'HEADER_SUBMIT_SEARCH',
}

export interface HeaderSubmitPayload {
    searchInput: string;
}

export const HeaderSubmitSearch = (payload: HeaderSubmitPayload): IAction<HeaderActions, HeaderSubmitPayload> => {
    return {
        type: HeaderActions.HEADER_SUBMIT_SEARCH,
        payload,
    };
};
