import { RECEIVE_DECKS, CREATE_DECK } from '../actions'
const initialState = {}

function decks (state = initialState, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.payload,
            }
        case CREATE_DECK:
        var key = action.payload
        var obj = {}
        obj[key]= {
            title: key,
            questions: []
        }
            return {
                ...state,
                ...obj
            }
        default:
            return initialState
    }
}

export default decks