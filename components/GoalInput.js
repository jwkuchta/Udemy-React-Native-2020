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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler}/>
                    </View>
                </View>
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
      padding: 10,
      marginBottom: 10
    },
    inputContainer: { 
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

