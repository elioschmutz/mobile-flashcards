import { ADD_DECK, ADD_CARD_TO_DECK } from '../actions/decks'

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, cards: [] }
      }
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          cards: [...state[action.title].cards, action.card]
        }
      }
    default:
      return state
  }
}
