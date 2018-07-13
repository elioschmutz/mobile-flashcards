import { addCardToDeck } from './decks'
import id from '../utils/id'

export const ADD_CARD = 'ADD_CARD'

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  }
}

export function handleAddCardToDeck(deckId, card) {
  card.id = id()
  return dispatch => {
    dispatch(addCard(card))
    dispatch(addCardToDeck(deckId, card))
  }
}
