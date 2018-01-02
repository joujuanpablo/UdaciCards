import { RECEIVE_DECKS, CREATE_DECK, CREATE_CARD } from '../actions/types'
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
        case CREATE_CARD:
            const { deckName, question, answer } = action.payload
            const existingQuestions = state[deckName].questions
            const existingDeck = state[deckName]
        
            return {
                    ...state,
                    [deckName]: {
                        ...existingDeck,
                        questions: [
                            ...existingQuestions,
                            { 
                                answer,
                                question,
                                
                            }
                        ]
                    }
                }
        default:
            return initialState
    }
}

export default decks