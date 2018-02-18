import { AnyAction } from 'redux';

import { HomepageActions } from './HomepageActions';

export interface HomepageState {
    playingVideo: {
        videoId: string;
        snippet: {
            channelId: string;
            channelTitle: string;
            title: string;
            description: string;
        };
    };
    detailsLoaded: boolean;
    videoDetail: any;
    loggedIn: boolean;
    googleData: any;
}

export const HomepageInitialState: HomepageState = {
    playingVideo: {
        videoId: '',
        snippet: {
            channelId: '',
            channelTitle: '',
            title: '',
            description: '',
        },
    },
    detailsLoaded: false,
    videoDetail: null,
    loggedIn: false,
    googleData: null,
};

export const HomepageReducer = (state: HomepageState = HomepageInitialState , action: AnyAction) => {
    switch (action.type) {
        case HomepageActions.HOMEPAGE_PLAY_VIDEO:
            return {
                ...state,
                playingVideo: action.payload,
                detailsLoaded: false,
            };
        case HomepageActions.HOMEPAGE_DETAILS_LOADED:
            return {
                ...state,
                detailsLoaded: true,
                videoDetail: action.payload,
            };
        case HomepageActions.HOMEPAGE_GOOGLE_LOGGED:
            return {
                ...state,
                loggedIn: true,
                googleData: action.payload,
            };
            case HomepageActions.HOMEPAGE_GOOGLE_LOGOUT:
            return {
                ...state,
                loggedIn: false,
            };

        default:
            return state;
    }
};

// Selectors
export const getHomepageStore = (storeState): HomepageState => {
    return storeState.homepageState;
};

export const getVideoId = (state: HomepageState): string => {
    return state.playingVideo.videoId;
};
export const getSnippet = (state: HomepageState): any => {
    return state.playingVideo.snippet;
};
export const getVideoDetail = (state: HomepageState): any => {
    return state.videoDetail;
};

export const getIsLogged = (state: HomepageState): any => {
    return state.loggedIn;
};
export const getGoogleData = (state: HomepageState): any => {
    return state.googleData;
};

export default HomepageReducer;
