import { IFilmsListState } from './films/types';
import { ICharacterListState } from './characters/types';

export interface IRootState {
  films: IFilmsListState;
  characters: ICharacterListState;
}
