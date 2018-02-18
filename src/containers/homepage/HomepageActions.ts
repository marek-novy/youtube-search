import { IAction } from '../../types/ActionInterface';

export enum HomepageActions {
    HOMEPAGE_PLAY_VIDEO = 'HOMEPAGE_PLAY_VIDEO',
    HOMEPAGE_DETAILS_LOADED = 'HOMEPAGE_DETAILS_LOADED',
    HOMEPAGE_GOOGLE_LOGGED = 'HOMEPAGE_GOOGLE_LOGGED',
    HOMEPAGE_GOOGLE_LOGOUT = 'HOMEPAGE_GOOGLE_LOGOUT',
    HOMEPAGE_VIDEO_LIKE = 'HOMEPAGE_GOOGLE_LIKE',
}

export interface HomepagePlayVideoPayload {
    videoId: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        title: string;
    };
}

export const HomepagePlayVideo = (
    payload: HomepagePlayVideoPayload,
): IAction<HomepageActions, HomepagePlayVideoPayload> => {
    return {
        type: HomepageActions.HOMEPAGE_PLAY_VIDEO,
        payload,
    };
};

export const HomepageGoogleLogged = (payload): IAction<HomepageActions, any> => {
    return {
        type: HomepageActions.HOMEPAGE_GOOGLE_LOGGED,
        payload,
    };
};
export const HomepageGoogleLogout = (): IAction<HomepageActions, void> => {

    return {
        type: HomepageActions.HOMEPAGE_GOOGLE_LOGOUT,
    };
};

export interface HomepageLikeVideoPayload {
    videoId: string;
    accessToken: string;
}

export const HomepageLikeVideo = (payload): IAction<HomepageActions, HomepagePlayVideoPayload> => {
    return {
        type: HomepageActions.HOMEPAGE_VIDEO_LIKE,
        payload,
    };
};
