export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks(decks) {
    console.log('action being fired', typeof decks)
    return {
        type: RECEIVE_DECKS,
        payload: decks
    }
}