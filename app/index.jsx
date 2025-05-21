import { router } from 'expo-router'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FokusButton } from '../components/FokusButton'

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/fokus-logo.png')} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Otimize sua {'\n'}produtividade,{'\n'}
          <Text style={styles.bold}>mergulhe no que {'\n'}importa</Text>
        </Text>

        <Image source={require('../assets/images/inicial.png')} />
        <FokusButton
          title='Quero iniciar!'
          onPress={() => router.navigate('/pomodoro')}
        />
      </View>

      <View>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#021123',
    gap: 40,
    padding: 24,
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
  content: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    color: '#FFF',
    fontSize: 26,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
})
