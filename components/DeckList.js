import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList} from 'react-native'
import { getSampleDecks } from '../utils/sampleData'
import DeckSummary from './DeckSummary'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'

const sampleArray = [{name:'alpha'}, {name:'bravo'}, {name:'charlie'}, {name:'delta'}, {name: 'echo'}, {name: 'foxtrot'}, {name: 'golf'}]


class DeckList extends Component {

    state = {}
    renderItem = ({ item }) => {
       return <DeckSummary name={item.title} number={item.questions} key={item.name}/>
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
                <FlatList data={this.props.justDecks} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </View>
        )
    }
}

function mapStateToProps(decks) {
    const justDecks = Object.keys(decks).map((key) => {
        const { questions, title } = decks[key]
        return {
                title,
                questions: questions.length
        }
    })
    return {
        justDecks,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveDecks: (decks) => dispatch(receiveDecks(decks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)