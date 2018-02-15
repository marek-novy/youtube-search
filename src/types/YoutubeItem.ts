interface YoutubeItem {
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };

    kind: string;
    snippet: any;
}
