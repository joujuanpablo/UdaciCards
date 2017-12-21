import React, { Component } from 'react'
import { View, Text, FlatList} from 'react-native'
import { getSampleDecks } from '../utils/sampleData'
import DeckSummary from './DeckSummary'

const sampleArray = [{name:'alpha'}, {name:'bravo'}, {name:'charlie'}, {name:'delta'}, {name: 'echo'}, {name: 'foxtrot'}, {name: 'golf'}]


class DeckList extends Component {

    renderItem = ({ item }) => {
       return <DeckSummary name={item.name} key={item.name}/>
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Text>DeckList</Text>
                <FlatList data={sampleArray} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </View>
        )
    }
}

export default DeckList

//<Text>{JSON.stringify(getSampleDecks())}</Text>