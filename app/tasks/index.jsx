import { router } from 'expo-router'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FokusButton } from '../../components/FokusButton'
import { IconPlus } from '../../components/Icons'
import TaskItem from '../../components/TaskItem'
import useTaskContext from '../../components/context/useTaskContext'

export default function Tasks() {
  const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          {/* {tasks.map((task) => {
            return (
              <TaskItem 
                key={task.id} 
                completed ={task.completed}
                text={task.description}
              />
            )
          })} */}
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
                onToggleComplete={() => toggleTaskCompleted(item.id)}
                onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.title}>Lista de tarefas:</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton
                  title='Adicionar nova tarefa'
                  icon={<IconPlus />}
                  outline
                  onPress={() => router.navigate('/add-task')}
                />
              </View>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 26,
    marginBottom: 16,
  },
  inner: {
    gap: 8,
  },
  wrapper: {
    gap: 40,
    width: '90%',
  },
})
