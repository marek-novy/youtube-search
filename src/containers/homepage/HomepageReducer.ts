import { AnyAction } from 'redux';

import { HomepageActions } from './HomepageActions';

interface HomepageState {
    playingVideo: {
        videoId: string;
    };
}

const initialState: HomepageState = {
    playingVideo: {
        videoId: '',
    },
};

export const HomepageReducer: (state: HomepageState, action: AnyAction) => HomepageState = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case HomepageActions.HOMEPAGE_PLAY_VIDEO:
            return {
                ...state,
                playingVideo: action.payload,
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

export default HomepageReducer;
