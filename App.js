import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, ScrollView, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [ input, setInput ] = useState('')
  const [ goals, setGoals ] = useState([])

  const inputHandler = (input) => {
    setInput(input)
  }

  const addGoalHandler = () => {
    setGoals(goals => [...goals, { key: Math.random().toString(), value: input }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput input={input} addGoal={addGoalHandler} inputHandler={inputHandler}/>
      </View>
      <FlatList 
      data={goals} 
      renderItem={ itemData => <GoalItem item={itemData}/>}>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50 
  },
  inputContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: "center"
  }
})

