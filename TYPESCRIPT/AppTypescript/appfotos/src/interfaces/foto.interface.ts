export interface IFoto {
    format:     Format;
    width:      number;
    height:     number;
    filename:   string;
    id:         number;
    author:     string;
    author_url: string;
    post_url:   string;
}

export enum Format {
    JPEG = "jpeg",
}
