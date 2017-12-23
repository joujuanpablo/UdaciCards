export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'

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