export type MediaItem = {
    recomender: string;
    media_type: string;
    title: string;
    link: URL
};

export type History = {
    media_item: MediaItem
    rating: number
}

export type UserData = {
    id: 1
    username: string;
    to_consume_list: MediaItem[];
    history_list: History[];
}