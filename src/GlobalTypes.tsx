export type MovieFormType = {
    [actor: string]: string;
    genre: string;
    title: string;    
}

export type MusicFormType = {
    [album: string]: string;
    artist: string;
    genre: string;
    song: string;    
}

export type FormElementType = {
  key: string;
  label: string;
  name: string;
  type: string;
}

