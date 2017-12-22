import RECEIVE_DECKS from '../actions'
const initialState = {
    test: 'is a test'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_DECKS:
        console.log('action payload', action.payload)
            return {
                ...state,
                ...action.payload,
            }
        default:
            return initialState
    }
}