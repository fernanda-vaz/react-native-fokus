import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import useTaskContext from '../../components/context/useTaskContext'
import { FokusButton } from '../../components/FokusButton'
import { IconSave } from '../../components/Icons'

export default function EditTask() {
  const { id } = useLocalSearchParams()
  const { tasks, updateTask } = useTaskContext()

  const task = tasks.find((t) => t.id == id)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (task) {
      setDescription(task.description)
    }
  }, [task])

  const handleSave = () => {
    if (!description) return
    updateTask(task.id, description)
    router.navigate('/tasks')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar tarefa:</Text>
      <TextInput 
        value={description} 
        onChangeText={setDescription} 
        multiline
        style={styles.input} 
    />
      <FokusButton title='Salvar' icon={<IconSave />} onPress={handleSave} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    padding: 24,
    justifyContent: 'center',
    gap: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    minHeight: 100,
  },
})
