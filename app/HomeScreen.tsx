import { useGame } from '@/context/GameContext'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Crown } from 'lucide-react-native'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import HighScoreModal from '../components/HighScoreModal'
import { globalStyles } from '../styles/theme'
const HomeScreen = () => {
  const [showHighScore, setShowHighScore] = useState(false);
  const {  restart } = useGame();
  const router = useRouter();

  const handleScoreBoard = () => {
    setShowHighScore(true);
  }

  const handleCloseHighScore = () => {
    setShowHighScore(false);
  }

  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={[globalStyles.container, styles.container]}>
        <TouchableOpacity style={[styles.iconBG,globalStyles.shadow]} onPress={handleScoreBoard} activeOpacity={0.85}>
        <Crown size={26} color="#4b3979" />
        </TouchableOpacity>
        <View style={styles.centered}>
        <Image source={require('../assets/images/appIcon.png')} style={styles.logo} />

         
        </View>
        <View style={styles.buttonGroup}>
              <TouchableOpacity style={[globalStyles.button, styles.button]} activeOpacity={0.85} onPress={() => {
                restart()
                router.navigate('/GameScreen')}}>

                <Text style={globalStyles.buttonText}>Start Game</Text>
              </TouchableOpacity>
          </View>

        <HighScoreModal isOpen={showHighScore} onClose={handleCloseHighScore} />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo:{
    height:wp("90%"),
    width:wp("90%"),
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3a2d5f',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#3a2d5f',
    opacity: 0.8,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
    gap: 18,
    paddingBottom:hp("10%")
  },
  button: {
    marginVertical: 8,
    minWidth: 180,
    alignSelf: 'center',
    width:wp("70%"),
    height:hp("7%"),
    alignItems:"center",
    justifyContent:"center",
  },
  iconBG:{
    backgroundColor:"#f4f2f9",
    borderRadius:100,
    padding:10,
    marginVertical:hp("2%"),
    alignItems:"center",
    justifyContent:"center",
    width:wp("12%"),
    height:wp("12%"),
    alignSelf:"flex-end",
    marginRight:wp("5%")
  }
})

export default HomeScreen