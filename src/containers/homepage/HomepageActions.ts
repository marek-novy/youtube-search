import { IAction } from '../../types/ActionInterface';

export enum HomepageActions {
    HOMEPAGE_PLAY_VIDEO = 'HOMEPAGE_PLAY_VIDEO',
    HOMEPAGE_DETAILS_LOADED = 'HOMEPAGE_DETAILS_LOADED',
    HOMEPAGE_GOOGLE_LOGGED = 'HOMEPAGE_GOOGLE_LOGGED',
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