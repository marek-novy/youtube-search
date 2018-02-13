import { IAction } from 'types/ActionInterface';
import { HeaderActions } from './AppHeaderActions';

interface HeaderState {
    searchText: string;
    isLoading: boolean;
}

const initialState: HeaderState = {
    searchText: '',
    isLoading: false,
};
export const HeaderReducer = (state: HeaderState = initialState, action: IAction<HeaderActions, any>) => {
    switch (action.type) {
        case HeaderActions.HEADER_SUBMIT_SEARCH:
            return {
                ...state,
                formData: action.payload,
                isLoading: true,
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
