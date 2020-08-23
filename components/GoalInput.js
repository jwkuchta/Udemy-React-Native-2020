import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native'

const GoalInput = props => {

    const [ enteredGoal, setEnteredGoal ] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='Enter your goal' 
            style={styles.input} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)}/>
        </View>    
    )
}

export default GoalInput

const styles = StyleSheet.create({
    input: { 
      width: '80%', 
      borderBottomColor: 'grey', 
      borderBottomWidth: 1, 
      padding: 10 
    },
    inputContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: "center"
      }
})

