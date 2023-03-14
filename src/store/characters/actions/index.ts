import CharacterActionTypes from './types';

/** Character info */
export const fetchCharactersInfo = (meta) => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_INFO,
  meta,
});

export const fetchOneCharacterInfo = (meta) => ({
  type: CharacterActionTypes.FETCH_ONE_CHARACTER_INFO,
  meta,
});

export const setCharacterInfo = (data) => ({
  type: CharacterActionTypes.SET_CHARACTERS_INFO,
  data,
});

export const clearCharacterInfo = () => ({
  type: CharacterActionTypes.CLEAR_CHARACTERS_INFO,
});
