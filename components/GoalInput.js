import React from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native'

const GoalInput = props => {
    
    return (
        <>
            <TextInput 
            placeholder='Enter your goal' 
            style={styles.input} 
            onChangeText={props.inputHandler}
            value={props.input}
            />
            <Button title='ADD' onPress={props.addGoal}/>
        </>    
    )
}

export default GoalInput

const styles = StyleSheet.create({
    input: { 
      width: '80%', 
      borderBottomColor: 'grey', 
      borderBottomWidth: 1, 
      padding: 10 
    }
  })