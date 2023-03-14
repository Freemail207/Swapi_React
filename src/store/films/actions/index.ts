import FilmsActionTypes from './types';

/** Films info */
export const fetchFilmsInfo = (meta) => ({
  type: FilmsActionTypes.FETCH_FILMS_INFO,
  meta,
});

export const fetchOneFilmsInfo = (meta) => ({
  type: FilmsActionTypes.FETCH_ONE_FILM_INFO,
  meta,
});

export const setFilmsInfo = (data) => ({
  type: FilmsActionTypes.SET_FILMS_INFO,
  data,
});

export const clearFilmsInfo = () => ({
  type: FilmsActionTypes.CLEAR_FILMS_INFO,
});
