import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
    
    return (
        <View style={styles.listItem} key={props.item.item.key}>
            <Text>{props.item.item.value}</Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      margin: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
  })