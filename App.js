import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [ courseGoals, setCourseGoals ] = useState([])
  const [ isAddMode, setIsAddMode ] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])
    setIsAddMode(false)
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId))
  }

  const cancelGoalAddingHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAddingHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => (
        <GoalItem 
        id={itemData.item.id}
        title={itemData.item.value} 
        onDelete={removeGoalHandler}
        />
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50 
  }
})

