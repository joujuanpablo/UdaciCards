import { AsyncStorage } from 'react-native'
import { getSampleDecks } from '../utils/sampleData'

export const UDACICARDS_STORAGE_KEY = 'UdaciCards:decks'

function setData(sampleDecks) {
    AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(sampleDecks))
    return sampleDecks
}

function returnData(results) {
    const resultsObject = JSON.parse(results)
    console.log('resultsObject', typeof resultsObject)
    return resultsObject
}

export function fetchDecks() {

    const sampleDecks = getSampleDecks()

    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
        .then((results) => {
            return results === null
                    ? setData(sampleDecks)
                    : returnData(results)
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

