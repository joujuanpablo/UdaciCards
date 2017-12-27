export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const CREATE_CARD = 'CREATE_CARD'

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
export function createCard(card) {
    return {
        type: CREATE_CARD,
        payload: card
    }
} 