import { IAction } from '../../types/ActionInterface';

export enum HomepageActions {
    HOMEPAGE_PLAY_VIDEO = 'HOMEPAGE_PLAY_VIDEO',
}

export interface HomepagePlayVideoPayload {
    videoId: string;
}

export const HomepagePlayVideo = (
    payload: HomepagePlayVideoPayload,
): IAction<HomepageActions, HomepagePlayVideoPayload> => {
    return {
        type: HomepageActions.HOMEPAGE_PLAY_VIDEO,
        payload,
    };
};
