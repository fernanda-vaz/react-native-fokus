import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useEffect, useState } from 'react'

export const TaskContext = createContext()

const TASKS_STORAGE_KEY = 'fokus-tasks'

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY)
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : []
        setTasks(loadedData)
        setIsLoaded(true)
      } catch (error) {
        // error reading value
        console.log('Erro ao ler os dados', error)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue)
      } catch (error) {
        // saving error
        console.log('Erro ao salvar dados', error)
      }
    }

    if (isLoaded) {
      storeData(tasks)
    }
  }, [tasks])

  const addTasks = (description) => {
    console.log('Tarefa será adicionada')
    setTasks((oldState) => {
      return [
        ...oldState,
        {
          description,
          id: oldState.length + 1,
        },
      ]
    })
  }

  const toggleTaskCompleted = (id) => {
    setTasks((oldState) => {
      return oldState.map((task) => {
        if (task.id == id) {
          task.completed = !task.completed
        }

        return task
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((oldState) => {
      return oldState.filter((task) => task.id != id)
    })
  }

  const updateTask = (id, newDescription) => {
    setTasks((oldState) =>
      oldState.map((t) => {
        if (t.id == id) {
          return {
            ...t,
            description: newDescription,
          }
        }
        return t
      })
    )
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTasks,
        toggleTaskCompleted,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
