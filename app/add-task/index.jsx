import { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { IconSave } from '../../components/Icons'
import useTaskContext from '../../components/context/useTaskContext'
import { router } from 'expo-router'

export default function AddTask() {
  const [description, setDescription] = useState()

  const { addTasks } = useTaskContext()

  const submitTask = () => {
    if (!description) {
      return
    }
    addTasks(description)
    setDescription('')
    router.navigate('/tasks')
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <Text style={styles.title}>Adicionar tarefa:</Text>
          <View style={styles.inner}>
            <Text style={styles.text}>Em que você está trabalhando?</Text>
            <TextInput
              style={styles.input}
              numberOfLines={10}
              multiline={true}
              value={description}
              onChangeText={setDescription}
            />
            <View style={styles.actions}>
              <Pressable style={styles.button} onPress={submitTask}>
                <IconSave />
                <Text>Salvar</Text>
              </Pressable>
            </View>
          </View>
          <View>
            <Text style={styles.footerText}>
              Projeto fictício e sem fins comerciais.
            </Text>
            <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#021123',
    gap: 32,
  },
  content: {
    gap: 32,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26,
  },
  inner: {
    backgroundColor: '#98A0A8',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    height: 150,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
