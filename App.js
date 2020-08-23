import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, ScrollView, FlatList } from 'react-native';

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
        <TextInput 
        placeholder='Enter your goal' 
        style={styles.input} 
        onChangeText={inputHandler}
        value={input}
        />
        <Button title='ADD' onPress={addGoalHandler}/>
      </View>
      <FlatList 
      data={goals} 
      renderItem={ itemData => (
      <View style={styles.listItem} key={itemData.item.key}>
        <Text>{itemData.item.value}</Text>
      </View>
      )}>
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
  },
  input: { 
    width: '80%', 
    borderBottomColor: 'grey', 
    borderBottomWidth: 1, 
    padding: 10 
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

