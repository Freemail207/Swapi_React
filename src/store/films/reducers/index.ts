import FilmsActionTypes from '../actions/types';
import { IFilmsListState } from '../types';

export default function films(state: IFilmsListState = {} as IFilmsListState, action: any) {
  switch (action.type) {
    case FilmsActionTypes.SET_FILMS_INFO:
      return {
        ...state,
        films: action.data,
      };
    case FilmsActionTypes.SET_ONE_FILM_INFO:
      return {
        ...state,
        oneFilms: action.payload,
      };
    case FilmsActionTypes.CLEAR_FILMS_INFO:
      return {
        ...state,
        films: null,
      };
    default:
      return state;
  }
}
