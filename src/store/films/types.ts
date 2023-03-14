export interface IFilmsListState {
  films: ISingleFilm[];
  oneFilm: ISingleFilm;
}

export interface ISingleFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  species: string[];
  vehicles: string[];
  starships: string[];
  planets: string[];
  characters: string[];
  release_date: string; // TODO be careful
  created: string; // TODO be careful
  edited: string; // TODO be careful
  url: string; // TODO be careful
}
