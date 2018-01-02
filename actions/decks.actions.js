import { RECEIVE_DECKS, CREATE_DECK } from './types'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        payload: decks
    }
}
export function createDeck(title) {
    return {
        type: CREATE_DECK,
        payload: title
    }
} 