import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet, Modal, ProgressBarAndroidComponent } from 'react-native'

const GoalInput = props => {

    const [ enteredGoal, setEnteredGoal ] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')

    }
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Enter your goal' 
                style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <Button title='CANCEL' color='red' onPress={props.onCancel}/>
                <Button title='ADD' onPress={addGoalHandler}/>
            </View>   
        </Modal>     
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
        justifyContent: 'space-between',
        alignItems: "center",
        flex: 1
    }
})

