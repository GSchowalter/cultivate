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

export type UserData = {
    id: 1
    username: string;
    to_listen_list: ToListenData[];
    listen_history_list: HistoryData[];
}