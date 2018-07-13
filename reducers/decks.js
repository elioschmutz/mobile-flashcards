import { ADD_DECK } from '../actions/decks'

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] }
      }
    default:
      return state
  }
}