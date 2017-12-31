import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import { getSampleDecks } from '../utils/sampleData'
import DeckSummary from './DeckSummary'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { white, gray, blue } from '../utils/colors'

class DeckList extends Component {
    state = {
        editMode: false,
        decksArray: [],
    }
    componentDidMount() {
        fetchDecks()
        .then((resultsObject) => {
            this.props.receiveDecks(resultsObject)
        }).then(() => this.setState({
            decksArray: this.props.decksArray
        }))
    }
    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        })
    }
    renderItem = ({ item }) => {
        return <DeckSummary navigation={this.props.navigation} name={item.title} questions={item.questions} key={item.title}/>
     }

    render() {
        return(
            <View style={{flex:1}}>
                <View style={[styles.headerContainer, Platform.OS === 'ios' ? styles.headerContainerIos : null]}>
                    <Text style={styles.header}>My Decks</Text>
                    <View style={this.state.editMode ? {display: 'none'} : {display: 'flex'}}>
                        <TouchableOpacity
                        onPress={this.toggleEditMode} 
                        style={styles.editBnt}>
                        <Text style={{color: blue}}>
                                Edit
                            </Text>
                        </TouchableOpacity>                    
                    </View>
                    <View style={this.state.editMode ? {display: 'flex'} : {display: 'none'}}>
                        <TouchableOpacity
                            onPress={this.toggleEditMode} 
                            style={styles.editBnt}>
                            <Text style={{color: blue}}>
                                Done
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList data={this.state.decksArray} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: white,
        zIndex: 1,
    },
    headerContainerIos: {
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    editBnt: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 10,
    },
    header: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
    },
})

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