import { Pressable, StyleSheet, Text, View } from 'react-native'
import { IconCheck, IconPencil, IconTrash } from '../Icons'

const TaskItem = ({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
  onPressDelete,
}) => {
  const cardStyles = [styles.card]

  if (completed) {
    cardStyles.push(styles.cardCompleted)
  }

  return (
    <View style={cardStyles}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>
       <Pressable onPress={onPressDelete}>
        <IconTrash />
      </Pressable>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#98A0A8',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8,
  },
  text: {
    flex: 1,
    color: '#021123',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardCompleted: {
    backgroundColor: '#0F725C',
  },
})
