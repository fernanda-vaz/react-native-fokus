import { Pressable, StyleSheet, Text } from 'react-native'

export const ActionButton = ({ active, onPress, display }) => {
  return (
    <Pressable
      style={active ? styles.contextButtonActive : styles.contextButtonText}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  contextButtonText: {
    fontSize: 12.5,
    color: '#FFF',
    padding: 8,
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
})
