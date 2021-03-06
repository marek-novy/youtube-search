import { IAction } from 'types/ActionInterface';
import { HeaderActions } from './AppHeaderActions';

export interface HeaderState {
    searchText: string;
    isLoading: boolean;
}

export const HeaderInitialState: HeaderState = {
    searchText: '',
    isLoading: false,
};
export const HeaderReducer = (
    state: HeaderState = HeaderInitialState,
    action: IAction<HeaderActions, any>,
): HeaderState => {
    switch (action.type) {
        case HeaderActions.HEADER_SUBMIT_SEARCH:
            return {
                ...state,
                searchText: action.payload,
                isLoading: true,
            };
        case HeaderActions.HEADER_LOADED:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

// Selectors
export const getHeaderStore = (storeState): HeaderState => {
    return storeState.headerState;
};

export const getIsLoading = (state: HeaderState): boolean => {
    return state.isLoading;
};

export const getSearchValue = (state: HeaderState): string => {
    return state.searchText;
};

export default HeaderReducer;
