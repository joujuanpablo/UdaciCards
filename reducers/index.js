import { RECEIVE_DECKS } from '../actions'
const initialState = {}

function decks (state = initialState, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
        console.log('action payload', action.payload)
        console.log('action type', action.type)
            return {
                ...state,
                ...action.payload,
            }
        default:
            return initialState
    }
}

export default decks