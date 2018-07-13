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
        [action.deckId]: {
          ...state[action.deckId],
          cards: [...state[action.deckId].cards, action.card.id]
        }
      }
    default:
      return state
  }
}
