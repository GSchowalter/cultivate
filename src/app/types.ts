export type SpotifyData = {
    title: string;
    album: string;
    artist: string | string[];
    spotify: {
        id: string;
        uri: string;
    };
};