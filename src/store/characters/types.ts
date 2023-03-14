export interface ICharacterListState {
  characters: ISingleCharacter[];
  oneCharacter: ISingleCharacter;
}

export interface ISingleCharacter {
  name: string;
  height: number;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  release_date: string; // TODO be careful
  created: string; // TODO be careful
  edited: string; // TODO be careful
  url: string; // TODO be careful
}
