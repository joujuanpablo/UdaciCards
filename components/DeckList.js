import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList} from 'react-native'
import { getSampleDecks } from '../utils/sampleData'
import DeckSummary from './DeckSummary'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {

    state = {}
    renderItem = ({ item }) => {
       return <DeckSummary navigation={this.props.navigation} name={item.title} questions={item.questions} key={item.title}/>
    }

    componentDidMount() {
        fetchDecks()
        .then((resultsObject) => {
            console.log('compo did mount', typeof resultsObject)
            this.props.receiveDecks(resultsObject)
        })
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Text>DeckList</Text>
                <FlatList data={this.props.decksArray} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </View>
        )
    }
}

function mapStateToProps(decks) {
    const decksArray = Object.keys(decks).map((key) => {
        const { questions, title } = decks[key]
        return {
                title,
                questions
        }
    })
    return {
        decksArray,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveDecks: (decks) => dispatch(receiveDecks(decks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)