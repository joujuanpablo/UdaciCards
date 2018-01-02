import { CREATE_CARD } from './types'

export function createCard(card) {
    return {
        type: CREATE_CARD,
        payload: card
    }
} 