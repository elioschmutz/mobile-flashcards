export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addCardToDeck(deckId, card) {
  return {
    type: ADD_CARD_TO_DECK,
    deckId,
    card,
  }
}
