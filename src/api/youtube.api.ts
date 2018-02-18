import { HomepageLikeVideoPayload } from './../containers/homepage/HomepageActions';
/**
 * Helpers for fetch api
 *
 */

const FetchStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};

const FetchJson = (response): Promise<any> => {
    return response.json();
};

/**
 * Fetch video detail
 * Return response promise
 */
export const YoutubeFetchVideoDetails = videoId => {
    return fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${process.env.REACT_APP_GAPI}`,
    )
        .then(FetchStatus)
        .then(FetchJson);
};

/**
 * request video Like. With OAUTH token
 */
export const YoutubeLikeVideo = (videoObject: HomepageLikeVideoPayload) => {
    return fetch(`https://www.googleapis.com/youtube/v3/videos/rate?id=${videoObject.videoId}&rating=like`, {
        headers: {
            Authorization: `Bearer ${videoObject.accessToken}`,
        },
        method: 'POST',
    })
        .then(FetchStatus);
};
