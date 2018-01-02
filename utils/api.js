import { AsyncStorage } from 'react-native'
import { getSampleDecks } from './sampleData'

export const UDACICARDS_STORAGE_KEY = 'UdaciCards:mobileDecks'

//save sample data to device memory, then return it
function setData(sampleDecks) {
    AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(sampleDecks))
    return sampleDecks
}
//return existing data 
function returnData(results) {
    const resultsObject = JSON.parse(results)
    return resultsObject
}

export function fetchDecks() { 
    const sampleDecks = getSampleDecks() //sample decks object from sampleData file

    //see if there already is data (decks) in the app, 
    //if there is then use that data, otherwise use the sample data from sampleData
    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY) 
        .then((results) => {
            return results === null 
                ? setData(sampleDecks)
                : returnData(results)
        })
}
//Add new deck to device memory
export function submitNewDeck(title) {
    return AsyncStorage.mergeItem(UDACICARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}
// Add new card to existing deck on device memory
export function submitNewCard(card) {
    const { deckName, question, answer } = card

    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY) //get the questions array for that deck
        .then(results => {
            var theData = JSON.parse(results)
            var existingDeck = theData[deckName]
            var existingQuestions = existingDeck['questions']
            return existingQuestions
        }).then(existingQuestions => { //merge in the new question
            return AsyncStorage.mergeItem(UDACICARDS_STORAGE_KEY, JSON.stringify({
                [deckName]: {
                    ...[deckName],
                    ['questions']: [
                        ...existingQuestions,
                        {
                            answer,
                            question,
                        }
                    ]
                }
            }))
        })
}
//getDeck(id)
    //getitem
//saveDeckTitle(title)
    //mergeitem
//addCardToDeck(title,card)
    //mergeitem

//-----bonus options-----//

//removeDeck(id)

//removeCardFromDeck(id)

//editDeck(????)

//editCardFromDeck(????)

