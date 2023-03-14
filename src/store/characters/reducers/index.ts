import CharacterActionTypes from '../actions/types';
import { ICharacterListState } from '../types';

export default function characters(state: ICharacterListState = {} as ICharacterListState, action: any) {
  switch (action.type) {
    case CharacterActionTypes.SET_CHARACTERS_INFO:
      return {
        ...state,
        characters: action.data,
      };
    case CharacterActionTypes.SET_ONE_CHARACTER_INFO:
      return {
        ...state,
        oneCharacter: action.payload,
      };
    case CharacterActionTypes.CLEAR_CHARACTERS_INFO:
      return {
        ...state,
        characters: null,
      };
    default:
      return state;
  }
}
