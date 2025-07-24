import { useGame } from '@/context/GameContext'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Crown } from 'lucide-react-native'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import HighScoreModal from '../components/HighScoreModal'
import { globalStyles } from '../styles/theme'
const index = () => {
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
        <Crown size={RFValue(20)} color="#4b3979" />
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
  buttonGroup: {
    width: '100%',
    paddingBottom:hp("10%")
  },
  button: {
    marginVertical: hp("1%"),
    alignSelf: 'center',
    width:wp("70%"),
    height:hp("7%"),
    alignItems:"center",
    justifyContent:"center",
  },
  iconBG:{
    backgroundColor:"#f4f2f9",
    borderRadius:wp("30%"),
    marginVertical:hp("2%"),
    alignItems:"center",
    justifyContent:"center",
    width:wp("10%"),
    height:wp("10%"),
    alignSelf:"flex-end",
    marginRight:wp("5%")
  }
})

export default index