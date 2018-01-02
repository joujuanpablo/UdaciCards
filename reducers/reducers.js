import { combineReducers } from 'redux'
import decks from './decks.reducer'
import ui from './ui.reducer'

export default combineReducers({
    decks, 
    ui,
})