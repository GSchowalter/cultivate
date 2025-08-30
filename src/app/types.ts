export type ToListenData = {
    title: string;
    album: string;
    artist: string | string[];
    spotify: {
        id: string;
        uri: string;
    };
};

export type HistoryData = {
    title: string;
    album: string;
    artist: string | string[];
    spotify: {
        id: string;
        uri: string;
    };
    rating: number;
}