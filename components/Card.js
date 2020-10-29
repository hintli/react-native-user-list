import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

 class Card extends Component {
    render() {
        return (
            <View style={styles.containerCard}>
                <Text style={styles.hello}>{this.props.hello}</Text>
            </View>
        )
    }
}

Card.propTypes = {
    hello : PropTypes.string.isRequired
}


export default Card;


const styles = StyleSheet.create(
    {
       
        hello:{
            backgroundColor: "red",
            fontSize: 32,
            width: 110,
            height: 45,
            paddingLeft: 20,
            borderRadius: 10
        }
    }
)
 